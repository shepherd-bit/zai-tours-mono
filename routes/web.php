<?php

use App\Http\Controllers\ProfileController;
use App\Models\GalleryImage;
use App\Models\LaundryService;
use App\Models\Stay;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'stays' => Stay::query()
            ->where('is_available', true)
            ->orderBy('created_at')
            ->get(),
        'laundryServices' => LaundryService::query()
            ->where('is_available', true)
            ->orderBy('created_at')
            ->get(),
        'galleryImages' => GalleryImage::query()
            ->where('is_available', true)
            ->orderBy('created_at')
            ->get(),
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
