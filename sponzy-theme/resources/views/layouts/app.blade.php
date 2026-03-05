<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'FansFollow.me - Global Creator Platform')</title>
    <meta name="description" content="@yield('description', 'FansFollow is a global platform for fitness, martial arts, and wellness creators to monetize content.')">
    <meta name="keywords" content="@yield('keywords', 'creator platform, fitness, martial arts, monetization, subscriptions')">

    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <script type="application/ld+json">
        @json($schema ?? [])
    </script>

    @yield('extra_meta')
</head>
<body class="bg-gray-900 text-white">
    @include('partials.header')

    <main class="min-h-screen">
        @yield('content')
    </main>

    @include('partials.footer')

    @yield('extra_scripts')
</body>
</html>
