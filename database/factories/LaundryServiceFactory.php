<?php

namespace Database\Factories;

use App\Models\LaundryService;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<LaundryService>
 */
class LaundryServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->randomElement([
                'Standard Laundry',
                'Beddings & Duvets',
                'Delicate & Specialty',
                'Shoe Cleaning',
                'Ironing Only',
                'Express 6hr',
            ]),
            'price' => fake()->randomElement(['200', '250', '400', '500', '600–1,200', '+50%']),
            'unit' => fake()->randomElement(['KES / kg', 'KES / piece', 'KES / pair', 'rush fee']),
            'description' => fake()->randomElement([
                'Wash + fold, 24hr',
                'Deep clean, sun-dried',
                'Suits, silk, Maasai shuka care',
                'Sneakers to leather boots',
                'Pressed in 4hrs, crisp',
                'Drop by 9am, ready by 3pm',
            ]),
            'icon' => fake()->randomElement(['◐', '▭', '✦', '⬗', '≡', '↻']),
            'is_available' => fake()->boolean(85),
        ];
    }
}
