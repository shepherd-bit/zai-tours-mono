<?php

namespace Database\Seeders;

use App\Models\GalleryImage;
use Illuminate\Database\Seeder;

class GalleryImageSeeder extends Seeder
{
    /**
     * Seed the gallery_images table with the original storefront carousel.
     */
    public function run(): void
    {
        $images = [
            [
                'image' => 'https://picsum.photos/seed/zai-gallery-01/900/1125',
                'location' => 'Kilifi, KE',
                'site' => 'Kilifi Creek Sunset',
                'is_available' => true,
            ],
            [
                'image' => 'https://picsum.photos/seed/zai-gallery-02/1000/1000',
                'location' => 'Watamu, KE',
                'site' => 'Watamu Marine Park',
                'is_available' => true,
            ],
            [
                'image' => 'https://picsum.photos/seed/zai-gallery-03/1200/800',
                'location' => 'Diani, KE',
                'site' => 'Diani Beach Day',
                'is_available' => true,
            ],
            [
                'image' => 'https://picsum.photos/seed/zai-gallery-04/900/1350',
                'location' => 'Malindi, KE',
                'site' => 'Malindi Old Town',
                'is_available' => true,
            ],
            [
                'image' => 'https://picsum.photos/seed/zai-gallery-05/1100/1100',
                'location' => 'Kilifi, KE',
                'site' => 'Arabuko Sokoke',
                'is_available' => true,
            ],
            [
                'image' => 'https://picsum.photos/seed/zai-gallery-06/1200/750',
                'location' => 'Mombasa Line',
                'site' => 'SGR Coastal Ride',
                'is_available' => true,
            ],
            [
                'image' => 'https://picsum.photos/seed/zai-gallery-07/900/1125',
                'location' => 'Watamu, KE',
                'site' => 'Mida Creek',
                'is_available' => true,
            ],
            [
                'image' => 'https://picsum.photos/seed/zai-gallery-08/1200/900',
                'location' => 'Kilifi, KE',
                'site' => 'Baobab Trail',
                'is_available' => true,
            ],
            [
                'image' => 'https://picsum.photos/seed/zai-gallery-09/900/1200',
                'location' => 'Mombasa, KE',
                'site' => 'Fort Jesus Run',
                'is_available' => true,
            ],
            [
                'image' => 'https://picsum.photos/seed/zai-gallery-10/1000/1000',
                'location' => 'Tiwi, KE',
                'site' => 'Tiwi Beach Escape',
                'is_available' => true,
            ],
        ];

        foreach ($images as $image) {
            GalleryImage::query()->updateOrCreate(
                ['site' => $image['site']],
                $image,
            );
        }
    }
}
