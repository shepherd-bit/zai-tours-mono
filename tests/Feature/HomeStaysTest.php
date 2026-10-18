<?php

namespace Tests\Feature;

use App\Models\Stay;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class HomeStaysTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_receives_available_stays_from_database(): void
    {
        $available = Stay::factory()->create(['is_available' => true]);
        Stay::factory()->create(['is_available' => false]);

        $this->get(route('home'))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->has('stays', 1)
                ->where('stays.0.title', $available->title)
            );
    }

    public function test_home_page_stays_are_ordered_seeding_order(): void
    {
        Stay::factory()->create(['title' => 'Second', 'is_available' => true]);
        Stay::factory()->create(['title' => 'First', 'is_available' => true]);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->has('stays', 2)
                ->where('stays.0.title', 'Second')
                ->where('stays.1.title', 'First')
            );
    }

    public function test_deleting_a_stay_removes_it_from_home_page(): void
    {
        $stay = Stay::factory()->create(['is_available' => true]);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page->has('stays', 1));

        $stay->delete();

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page->has('stays', 0));
    }

    public function test_home_page_passes_stay_fields_rendered_by_stays_section(): void
    {
        Stay::factory()->create([
            'title' => 'Zai Loft Athi River',
            'location' => 'Athi River, Greenpark',
            'price_per_night' => 6500,
            'currency' => 'KES',
            'rating' => 4.9,
            'is_superhost' => true,
            'bedrooms' => '2BR',
            'max_guests' => 4,
            'airbnb_url' => 'https://www.airbnb.com/rooms/12345',
            'tags' => ['WiFi • 100Mbps', 'Kitchen'],
            'is_available' => true,
        ]);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->where('stays.0.title', 'Zai Loft Athi River')
                ->where('stays.0.location', 'Athi River, Greenpark')
                ->where('stays.0.price_per_night', 6500)
                ->where('stays.0.currency', 'KES')
                ->where('stays.0.rating', '4.9')
                ->where('stays.0.is_superhost', true)
                ->where('stays.0.bedrooms', '2BR')
                ->where('stays.0.max_guests', 4)
                ->where('stays.0.airbnb_url', 'https://www.airbnb.com/rooms/12345')
                ->where('stays.0.tags', ['WiFi • 100Mbps', 'Kitchen'])
            );
    }
}
