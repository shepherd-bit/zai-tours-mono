<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="description" content="Private transport, curated Airbnbs, and crisp laundry in Athi River, JKIA, SGR & Nairobi Metro. Handled in one call." />
        <meta property="og:title" content="ZAI Tours & Stays — Move. Stay. Fresh." />
        <meta property="og:description" content="Private airport & SGR transport, curated Airbnbs, and crisp laundry in Athi River & Nairobi Metro." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
