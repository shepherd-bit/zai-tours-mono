<?php

namespace App\Models;

use Database\Factories\StayFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stay extends Model
{
    /** @use HasFactory<StayFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'location',
        'price_per_night',
        'currency',
        'rating',
        'is_superhost',
        'bedrooms',
        'max_guests',
        'image',
        'airbnb_url',
        'tags',
        'is_available',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'price_per_night' => 'integer',
        'rating' => 'decimal:1',
        'is_superhost' => 'boolean',
        'max_guests' => 'integer',
        'tags' => 'array',
        'is_available' => 'boolean',
    ];
}
