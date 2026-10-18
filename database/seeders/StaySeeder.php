<?php

namespace Database\Seeders;

use App\Models\Stay;
use Illuminate\Database\Seeder;

class StaySeeder extends Seeder
{
    /**
     * Seed the stays table with the original storefront listings.
     */
    public function run(): void
    {
        $stays = [
            [
                'title' => 'Zai Loft Athi River',
                'location' => 'Athi River, Greenpark',
                'price_per_night' => 6500,
                'currency' => 'KES',
                'rating' => 4.9,
                'is_superhost' => false,
                'bedrooms' => '2BR',
                'max_guests' => 4,
                'image' => null,
                'airbnb_url' => null,
                'tags' => ['WiFi • 100Mbps', 'Kitchen', 'Parking'],
                'is_available' => true,
            ],
            [
                'title' => 'Zai Green Park Studio',
                'location' => 'Athi River, Off Msa Rd',
                'price_per_night' => 4000,
                'currency' => 'KES',
                'rating' => 4.9,
                'is_superhost' => false,
                'bedrooms' => '1BR',
                'max_guests' => 2,
                'image' => null,
                'airbnb_url' => null,
                'tags' => ['Fast WiFi', 'Self Check-in', 'Work Desk'],
                'is_available' => true,
            ],
            [
                'title' => 'Zai Syokimau Executive',
                'location' => 'Syokimau, Katani Rd',
                'price_per_night' => 9000,
                'currency' => 'KES',
                'rating' => 5.0,
                'is_superhost' => true,
                'bedrooms' => '3BR',
                'max_guests' => 6,
                'image' => null,
                'airbnb_url' => null,
                'tags' => ['Balcony', 'Gated Security', 'Washer'],
                'is_available' => true,
            ],
            [
                'title' => 'Zai Kitengela Hideout',
                'location' => 'Kitengela, Yukos',
                'price_per_night' => 5500,
                'currency' => 'KES',
                'rating' => 4.9,
                'is_superhost' => false,
                'bedrooms' => '2BR',
                'max_guests' => 4,
                'image' => null,
                'airbnb_url' => null,
                'tags' => ['Fast WiFi', 'Smart TV', 'Quiet Area'],
                'is_available' => true,
            ],
            [
                'title' => 'Zai Mlolongo Transit',
                'location' => 'Mlolongo • 12min to JKIA',
                'price_per_night' => 3500,
                'currency' => 'KES',
                'rating' => 4.9,
                'is_superhost' => false,
                'bedrooms' => '1BR',
                'max_guests' => 2,
                'image' => null,
                'airbnb_url' => null,
                'tags' => ['Quick JKIA Access', 'Hot Shower', 'Cozy Bed'],
                'is_available' => true,
            ],
            [
                'title' => 'Zai Garden Villa',
                'location' => 'Athi River, Daystar',
                'price_per_night' => 12000,
                'currency' => 'KES',
                'rating' => 5.0,
                'is_superhost' => false,
                'bedrooms' => '4BR',
                'max_guests' => 8,
                'image' => null,
                'airbnb_url' => null,
                'tags' => ['Private Garden', 'BBQ Patio', 'Chef On Call'],
                'is_available' => true,
            ],
        ];

        foreach ($stays as $stay) {
            Stay::query()->updateOrCreate(
                ['title' => $stay['title']],
                $stay,
            );
        }
    }
}
