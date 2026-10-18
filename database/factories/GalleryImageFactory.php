<?php

namespace Database\Factories;

use App\Models\GalleryImage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<GalleryImage>
 */
class GalleryImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $dimensions = fake()->randomElement([
            '900/1125', // portrait
            '1000/1000', // square
            '1200/800', // landscape
            '1200/750', // wide landscape
        ]);

        return [
            'image' => 'https://picsum.photos/seed/'.fake()->unique()->lexify('zai-gallery-??').'/'.$dimensions,
            'location' => fake()->randomElement([
                'Kilifi, KE',
                'Watamu, KE',
                'Diani, KE',
                'Malindi, KE',
                'Mombasa, KE',
                'Tiwi, KE',
            ]),
            'site' => fake()->randomElement([
                'Kilifi Creek Sunset',
                'Watamu Marine Park',
                'Diani Beach Day',
                'Malindi Old Town',
                'Arabuko Sokoke',
                'Fort Jesus Run',
            ]),
            'is_available' => fake()->boolean(85),
        ];
    }
}
