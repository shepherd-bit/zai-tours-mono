<?php

namespace Tests\Feature;

use App\Filament\Resources\GalleryImageResource;
use App\Filament\Resources\GalleryImageResource\Pages\CreateGalleryImage;
use App\Filament\Resources\GalleryImageResource\Pages\EditGalleryImage;
use App\Filament\Resources\GalleryImageResource\Pages\ListGalleryImages;
use App\Models\GalleryImage;
use App\Models\User;
use Filament\Actions\DeleteAction;
use Filament\Forms\Components\Field;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Arr;
use Livewire\Livewire;
use Tests\TestCase;

class GalleryImageResourceTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->actingAs(User::factory()->create());
    }

    public function test_list_page_renders_and_shows_gallery_images(): void
    {
        $image = GalleryImage::factory()->create();

        $this->get(GalleryImageResource::getUrl('index'))
            ->assertOk()
            ->assertSee($image->site);
    }

    public function test_create_page_renders(): void
    {
        $this->get(GalleryImageResource::getUrl('create'))
            ->assertOk();
    }

    public function test_can_create_gallery_image(): void
    {
        $attributes = GalleryImage::factory()->raw();

        Livewire::test(CreateGalleryImage::class)
            ->fillForm(Arr::except($attributes, 'image'))
            // File field state is set the way the browser does it, as an array of files.
            ->set('data.image', [$attributes['image']])
            ->call('create')
            ->assertHasNoFormErrors();

        $this->assertDatabaseHas('gallery_images', [
            'site' => $attributes['site'],
            'location' => $attributes['location'],
            'image' => $attributes['image'],
        ]);
    }

    public function test_site_is_required(): void
    {
        Livewire::test(CreateGalleryImage::class)
            ->fillForm([
                'site' => null,
            ])
            ->call('create')
            ->assertHasFormErrors(['site' => 'required']);
    }

    public function test_location_is_required(): void
    {
        Livewire::test(CreateGalleryImage::class)
            ->fillForm([
                'location' => null,
            ])
            ->call('create')
            ->assertHasFormErrors(['location' => 'required']);
    }

    public function test_can_save_gallery_image(): void
    {
        $image = GalleryImage::factory()->create();
        $newSite = 'Updated Gallery Site';

        Livewire::test(EditGalleryImage::class, ['record' => $image->getRouteKey()])
            ->fillForm([
                'site' => $newSite,
            ])
            ->call('save')
            ->assertHasNoFormErrors();

        $this->assertDatabaseHas('gallery_images', [
            'id' => $image->id,
            'site' => $newSite,
        ]);
    }

    public function test_editing_captions_does_not_erase_an_existing_remote_image(): void
    {
        $image = GalleryImage::factory()->create([
            'image' => 'https://picsum.photos/seed/zai-gallery-01/900/1125',
            'site' => 'Kilifi Creek Sunset',
        ]);

        Livewire::test(EditGalleryImage::class, ['record' => $image->getRouteKey()])
            ->fillForm([
                'site' => 'Kilifi Creek Sunrise',
            ])
            ->call('save')
            ->assertHasNoFormErrors();

        $this->assertDatabaseHas('gallery_images', [
            'id' => $image->id,
            'site' => 'Kilifi Creek Sunrise',
            'image' => 'https://picsum.photos/seed/zai-gallery-01/900/1125',
        ]);
    }

    public function test_can_delete_gallery_image(): void
    {
        $image = GalleryImage::factory()->create();

        Livewire::test(EditGalleryImage::class, ['record' => $image->getRouteKey()])
            ->callAction(DeleteAction::class);

        $this->assertModelMissing($image);
    }

    public function test_remote_images_preview_their_own_url_instead_of_a_storage_path(): void
    {
        $image = GalleryImage::factory()->create([
            'image' => 'https://picsum.photos/seed/zai-gallery-01/900/1125',
        ]);

        $page = Livewire::test(EditGalleryImage::class, ['record' => $image->getRouteKey()]);

        $field = collect($page->instance()->form->getFlatFields())
            ->first(fn (Field $field): bool => $field->getName() === 'image');

        $files = array_values($field->getUploadedFiles());

        $this->assertSame('https://picsum.photos/seed/zai-gallery-01/900/1125', $files[0]['url']);
    }

    public function test_table_columns_and_filters_are_defined(): void
    {
        $image = GalleryImage::factory()->create();

        Livewire::test(ListGalleryImages::class)
            ->assertCanSeeTableRecords([$image])
            ->assertTableColumnExists('image')
            ->assertTableColumnExists('site')
            ->assertTableColumnExists('location')
            ->assertTableColumnExists('is_available')
            ->assertTableFilterExists('is_available');
    }

    public function test_table_search_filters_by_site_and_location(): void
    {
        $matching = GalleryImage::factory()->create([
            'site' => 'Malindi Old Town',
            'location' => 'Malindi, KE',
        ]);
        $other = GalleryImage::factory()->create([
            'site' => 'Diani Beach Day',
            'location' => 'Diani, KE',
        ]);

        Livewire::test(ListGalleryImages::class)
            ->searchTable('Malindi')
            ->assertCanSeeTableRecords([$matching])
            ->assertCanNotSeeTableRecords([$other]);
    }

    public function test_available_filter_only_returns_available_images(): void
    {
        $available = GalleryImage::factory()->create(['is_available' => true]);
        $hidden = GalleryImage::factory()->create(['is_available' => false]);

        Livewire::test(ListGalleryImages::class)
            ->filterTable('is_available', true)
            ->assertCanSeeTableRecords([$available])
            ->assertCanNotSeeTableRecords([$hidden]);
    }

    public function test_unauthenticated_user_is_redirected_to_login(): void
    {
        auth()->logout();

        $this->get(GalleryImageResource::getUrl('index'))
            ->assertRedirect(route('filament.admin.auth.login'));
    }
}
