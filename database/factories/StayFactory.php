<?php

namespace Database\Factories;

use App\Models\Stay;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Stay>
 */
class StayFactory extends Factory
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
                'Zai Syokimau Executive',
                'Zai Katani Garden Suite',
                'Zai Imara Diani Retreat',
                'Zai Karen Luxury Villa',
            ]),
            'location' => fake()->randomElement([
                'Syokimau, Katani Rd',
                'Karen, Bogani East Rd',
                'Diani, Beach Road',
                'Westlands, Peponi Rd',
            ]),
            'price_per_night' => fake()->randomElement([4500, 6500, 9000, 12500, 18000]),
            'currency' => 'KES',
            'rating' => fake()->randomFloat(1, 3.5, 5.0),
            'is_superhost' => fake()->boolean(40),
            'bedrooms' => fake()->randomElement(['1BR', '2BR', '3BR', '4BR']),
            'max_guests' => fake()->numberBetween(2, 10),
            'image' => null,
            'airbnb_url' => 'https://www.airbnb.com/rooms/'.fake()->numberBetween(10000000, 99999999),
            'tags' => fake()->randomElements([
                'Balcony',
                'Gated Security',
                'Washer',
                'Free Wi-Fi',
                'Kitchen',
                'Air Conditioning',
                'Swimming Pool',
                'Parking',
                'Self Check-in',
            ], fake()->numberBetween(2, 5)),
            'is_available' => fake()->boolean(85),
        ];
    }
}
