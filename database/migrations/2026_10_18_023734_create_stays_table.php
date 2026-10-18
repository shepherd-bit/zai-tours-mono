<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stays', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('location');
            $table->integer('price_per_night');
            $table->string('currency')->default('KES');
            $table->decimal('rating', 2, 1)->nullable();
            $table->boolean('is_superhost')->default(false);
            $table->string('bedrooms')->nullable();
            $table->integer('max_guests');
            $table->string('image')->nullable();
            $table->string('airbnb_url')->nullable();
            $table->json('tags')->nullable();
            $table->boolean('is_available')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stays');
    }
};
