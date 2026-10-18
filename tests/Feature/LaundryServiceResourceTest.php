<?php

namespace Tests\Feature;

use App\Filament\Resources\LaundryServiceResource;
use App\Filament\Resources\LaundryServiceResource\Pages\CreateLaundryService;
use App\Filament\Resources\LaundryServiceResource\Pages\EditLaundryService;
use App\Filament\Resources\LaundryServiceResource\Pages\ListLaundryServices;
use App\Models\LaundryService;
use App\Models\User;
use Filament\Actions\DeleteAction;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class LaundryServiceResourceTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->actingAs(User::factory()->create());
    }

    public function test_list_page_renders_and_shows_laundry_services(): void
    {
        $service = LaundryService::factory()->create();

        $this->get(LaundryServiceResource::getUrl('index'))
            ->assertOk()
            ->assertSee($service->title);
    }

    public function test_create_page_renders(): void
    {
        $this->get(LaundryServiceResource::getUrl('create'))
            ->assertOk();
    }

    public function test_can_create_laundry_service(): void
    {
        $attributes = LaundryService::factory()->raw();

        Livewire::test(CreateLaundryService::class)
            ->fillForm($attributes)
            ->call('create')
            ->assertHasNoFormErrors();

        $this->assertDatabaseHas('laundry_services', [
            'title' => $attributes['title'],
            'unit' => $attributes['unit'],
        ]);
    }

    public function test_title_is_required(): void
    {
        Livewire::test(CreateLaundryService::class)
            ->fillForm([
                'title' => null,
            ])
            ->call('create')
            ->assertHasFormErrors(['title' => 'required']);
    }

    public function test_can_save_laundry_service(): void
    {
        $service = LaundryService::factory()->create();
        $newTitle = 'Updated Laundry Service Title';

        Livewire::test(EditLaundryService::class, ['record' => $service->getRouteKey()])
            ->fillForm([
                'title' => $newTitle,
            ])
            ->call('save')
            ->assertHasNoFormErrors();

        $this->assertDatabaseHas('laundry_services', [
            'id' => $service->id,
            'title' => $newTitle,
        ]);
    }

    public function test_can_delete_laundry_service(): void
    {
        $service = LaundryService::factory()->create();

        Livewire::test(EditLaundryService::class, ['record' => $service->getRouteKey()])
            ->callAction(DeleteAction::class);

        $this->assertModelMissing($service);
    }

    public function test_table_columns_and_filters_are_defined(): void
    {
        $service = LaundryService::factory()->create();

        Livewire::test(ListLaundryServices::class)
            ->assertCanSeeTableRecords([$service])
            ->assertTableColumnExists('icon')
            ->assertTableColumnExists('title')
            ->assertTableColumnExists('price')
            ->assertTableColumnExists('unit')
            ->assertTableColumnExists('description')
            ->assertTableColumnExists('is_available')
            ->assertTableFilterExists('is_available');
    }

    public function test_table_search_filters_by_title(): void
    {
        $matching = LaundryService::factory()->create([
            'title' => 'Shoe Cleaning',
        ]);
        $other = LaundryService::factory()->create([
            'title' => 'Ironing Only',
        ]);

        Livewire::test(ListLaundryServices::class)
            ->searchTable('Shoe')
            ->assertCanSeeTableRecords([$matching])
            ->assertCanNotSeeTableRecords([$other]);
    }

    public function test_available_filter_only_returns_available_services(): void
    {
        $available = LaundryService::factory()->create(['is_available' => true]);
        $hidden = LaundryService::factory()->create(['is_available' => false]);

        Livewire::test(ListLaundryServices::class)
            ->filterTable('is_available', true)
            ->assertCanSeeTableRecords([$available])
            ->assertCanNotSeeTableRecords([$hidden]);
    }

    public function test_unauthenticated_user_is_redirected_to_login(): void
    {
        auth()->logout();

        $this->get(LaundryServiceResource::getUrl('index'))
            ->assertRedirect(route('filament.admin.auth.login'));
    }
}
