<?php

namespace Database\Seeders;

use App\Models\LaundryService;
use Illuminate\Database\Seeder;

class LaundryServiceSeeder extends Seeder
{
    /**
     * Seed the laundry_services table with the original storefront rate cards.
     */
    public function run(): void
    {
        $services = [
            [
                'title' => 'Standard Laundry',
                'price' => '250',
                'unit' => 'KES / kg',
                'description' => 'Wash + fold, 24hr',
                'icon' => '◐',
                'is_available' => true,
            ],
            [
                'title' => 'Beddings & Duvets',
                'price' => '600–1,200',
                'unit' => 'KES / piece',
                'description' => 'Deep clean, sun-dried',
                'icon' => '▭',
                'is_available' => true,
            ],
            [
                'title' => 'Delicate & Specialty',
                'price' => '400',
                'unit' => 'KES / kg',
                'description' => 'Suits, silk, Maasai shuka care',
                'icon' => '✦',
                'is_available' => true,
            ],
            [
                'title' => 'Shoe Cleaning',
                'price' => '500',
                'unit' => 'KES / pair',
                'description' => 'Sneakers to leather boots',
                'icon' => '⬗',
                'is_available' => true,
            ],
            [
                'title' => 'Ironing Only',
                'price' => '200',
                'unit' => 'KES / kg',
                'description' => 'Pressed in 4hrs, crisp',
                'icon' => '≡',
                'is_available' => true,
            ],
            [
                'title' => 'Express 6hr',
                'price' => '+50%',
                'unit' => 'rush fee',
                'description' => 'Drop by 9am, ready by 3pm',
                'icon' => '↻',
                'is_available' => true,
            ],
        ];

        foreach ($services as $service) {
            LaundryService::query()->updateOrCreate(
                ['title' => $service['title']],
                $service,
            );
        }
    }
}
