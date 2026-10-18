<?php

namespace Tests\Feature;

use App\Filament\Resources\StayResource;
use App\Filament\Resources\StayResource\Pages\CreateStay;
use App\Filament\Resources\StayResource\Pages\EditStay;
use App\Filament\Resources\StayResource\Pages\ListStays;
use App\Models\Stay;
use App\Models\User;
use Filament\Actions\DeleteAction;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class StayResourceTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->actingAs(User::factory()->create());
    }

    public function test_list_page_renders_and_shows_stays(): void
    {
        $stay = Stay::factory()->create();

        $this->get(StayResource::getUrl('index'))
            ->assertOk()
            ->assertSee($stay->title);
    }

    public function test_create_page_renders(): void
    {
        $this->get(StayResource::getUrl('create'))
            ->assertOk();
    }

    public function test_can_create_stay(): void
    {
        $attributes = Stay::factory()->raw();

        Livewire::test(CreateStay::class)
            ->fillForm($attributes)
            ->call('create')
            ->assertHasNoFormErrors();

        $this->assertDatabaseHas('stays', [
            'title' => $attributes['title'],
            'location' => $attributes['location'],
        ]);
    }

    public function test_title_is_required(): void
    {
        Livewire::test(CreateStay::class)
            ->fillForm([
                'title' => null,
            ])
            ->call('create')
            ->assertHasFormErrors(['title' => 'required']);
    }

    public function test_can_save_stay(): void
    {
        $stay = Stay::factory()->create();
        $newTitle = 'Updated Stay Title';

        Livewire::test(EditStay::class, ['record' => $stay->getRouteKey()])
            ->fillForm([
                'title' => $newTitle,
            ])
            ->call('save')
            ->assertHasNoFormErrors();

        $this->assertDatabaseHas('stays', [
            'id' => $stay->id,
            'title' => $newTitle,
        ]);
    }

    public function test_can_delete_stay(): void
    {
        $stay = Stay::factory()->create();

        Livewire::test(EditStay::class, ['record' => $stay->getRouteKey()])
            ->callAction(DeleteAction::class);

        $this->assertModelMissing($stay);
    }

    public function test_table_columns_and_filters_are_defined(): void
    {
        $stay = Stay::factory()->create();

        Livewire::test(ListStays::class)
            ->assertCanSeeTableRecords([$stay])
            ->assertTableColumnExists('image')
            ->assertTableColumnExists('title')
            ->assertTableColumnExists('location')
            ->assertTableColumnExists('price_per_night')
            ->assertTableColumnExists('rating')
            ->assertTableColumnExists('is_superhost')
            ->assertTableColumnExists('is_available')
            ->assertTableFilterExists('is_superhost')
            ->assertTableFilterExists('is_available');
    }

    public function test_table_search_filters_by_title_and_location(): void
    {
        $matching = Stay::factory()->create([
            'title' => 'Diani Beach Villa',
            'location' => 'Diani Beach',
        ]);
        $other = Stay::factory()->create([
            'title' => 'Nairobi City Apartment',
            'location' => 'Nairobi',
        ]);

        Livewire::test(ListStays::class)
            ->searchTable('Diani')
            ->assertCanSeeTableRecords([$matching])
            ->assertCanNotSeeTableRecords([$other]);
    }

    public function test_superhost_filter_only_returns_superhosts(): void
    {
        $superhost = Stay::factory()->create(['is_superhost' => true]);
        $regular = Stay::factory()->create(['is_superhost' => false]);

        Livewire::test(ListStays::class)
            ->filterTable('is_superhost', true)
            ->assertCanSeeTableRecords([$superhost])
            ->assertCanNotSeeTableRecords([$regular]);
    }

    public function test_unauthenticated_user_is_redirected_to_login(): void
    {
        auth()->logout();

        $this->get(StayResource::getUrl('index'))
            ->assertRedirect(route('filament.admin.auth.login'));
    }
}
