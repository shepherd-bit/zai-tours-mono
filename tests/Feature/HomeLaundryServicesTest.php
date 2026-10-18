<?php

namespace Tests\Feature;

use App\Models\LaundryService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class HomeLaundryServicesTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_receives_available_laundry_services_from_database(): void
    {
        $available = LaundryService::factory()->create(['is_available' => true]);
        LaundryService::factory()->create(['is_available' => false]);

        $this->get(route('home'))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->has('laundryServices', 1)
                ->where('laundryServices.0.title', $available->title)
            );
    }

    public function test_home_page_laundry_services_are_ordered_seeding_order(): void
    {
        LaundryService::factory()->create(['title' => 'Second', 'is_available' => true]);
        LaundryService::factory()->create(['title' => 'First', 'is_available' => true]);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->has('laundryServices', 2)
                ->where('laundryServices.0.title', 'Second')
                ->where('laundryServices.1.title', 'First')
            );
    }

    public function test_deleting_a_laundry_service_removes_it_from_home_page(): void
    {
        $service = LaundryService::factory()->create(['is_available' => true]);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page->has('laundryServices', 1));

        $service->delete();

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page->has('laundryServices', 0));
    }

    public function test_home_page_passes_laundry_service_fields_rendered_by_laundry_section(): void
    {
        LaundryService::factory()->create([
            'title' => 'Standard Laundry',
            'price' => '250',
            'unit' => 'KES / kg',
            'description' => 'Wash + fold, 24hr',
            'icon' => '◐',
            'is_available' => true,
        ]);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->where('laundryServices.0.title', 'Standard Laundry')
                ->where('laundryServices.0.price', '250')
                ->where('laundryServices.0.unit', 'KES / kg')
                ->where('laundryServices.0.description', 'Wash + fold, 24hr')
                ->where('laundryServices.0.icon', '◐')
            );
    }

    public function test_home_page_preserves_range_and_percentage_pricing(): void
    {
        LaundryService::factory()->create([
            'title' => 'Beddings & Duvets',
            'price' => '600–1,200',
            'unit' => 'KES / piece',
            'is_available' => true,
        ]);
        LaundryService::factory()->create([
            'title' => 'Express 6hr',
            'price' => '+50%',
            'unit' => 'rush fee',
            'is_available' => true,
        ]);

        $this->get(route('home'))
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->has('laundryServices', 2)
                ->where('laundryServices.0.price', '600–1,200')
                ->where('laundryServices.1.price', '+50%')
            );
    }
}
