<?php

namespace Tests\Feature;

use App\Models\GalleryImage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class HomeGalleryImagesTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_receives_available_gallery_images_from_database(): void
    {
        $available = GalleryImage::factory()->create(['is_available' => true]);
        GalleryImage::factory()->create(['is_available' => false]);

        $this->get(route('home'))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->has('galleryImages', 1)
                ->where('galleryImages.0.site', $available->site)
            );
    }

    public function test_home_page_gallery_images_are_ordered_seeding_order(): void
    {
        GalleryImage::factory()->create(['site' => 'Second', 'is_available' => true]);
        GalleryImage::factory()->create(['site' => 'First', 'is_available' => true]);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->has('galleryImages', 2)
                ->where('galleryImages.0.site', 'Second')
                ->where('galleryImages.1.site', 'First')
            );
    }

    public function test_deleting_a_gallery_image_removes_it_from_home_page(): void
    {
        $image = GalleryImage::factory()->create(['is_available' => true]);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page->has('galleryImages', 1));

        $image->delete();

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page->has('galleryImages', 0));
    }

    public function test_home_page_passes_gallery_image_fields_rendered_by_gallery(): void
    {
        GalleryImage::factory()->create([
            'image' => 'https://picsum.photos/seed/zai-gallery-01/900/1125',
            'location' => 'Kilifi, KE',
            'site' => 'Kilifi Creek Sunset',
            'is_available' => true,
        ]);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->where('galleryImages.0.image', 'https://picsum.photos/seed/zai-gallery-01/900/1125')
                ->where('galleryImages.0.location', 'Kilifi, KE')
                ->where('galleryImages.0.site', 'Kilifi Creek Sunset')
            );
    }

    public function test_home_page_passes_uploaded_storage_paths_for_the_gallery_to_resolve(): void
    {
        GalleryImage::factory()->create([
            'image' => 'gallery/kilifi-creek.jpg',
            'location' => 'Kilifi, KE',
            'site' => 'Kilifi Creek Sunset',
            'is_available' => true,
        ]);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->where('galleryImages.0.image', 'gallery/kilifi-creek.jpg')
            );
    }
}
