<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    <!-- Styles -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500&display=swap');

        body {
            font-family: 'Poppins', sans-serif;
            background: rgb(115, 192, 128);
            background: linear-gradient(90deg, rgba(115, 192, 128, 1) 0%, rgba(200, 234, 209, 1) 50%);
        }
    </style>
    @vite('resources/css/app.css')
</head>

<body>
    <div class="min-h-screen flex flex-col justify-center mx-32 gap-3">
        <p class="text-xl text-white">Halo, Welcom To</p>
        <h1 class="text-[64px] text-white font-bold">MATHEMATICS EVENT</h1>
        <h1 class="text-5xl text-primary font-bold">XXIV</h1>
        <p class="text-white">Lorem ipsum dolor sit amet.</p>
        <p class="max-w-96 text-xs text-white">Lorem ipsum dolorsdasdasdasdass sit amet consectetur adipisicing elit.
            Facere a
            suscipit,
            quo voluptate iure
            voluptatum.
        </p>
        <button class="w-[300px] text-primary uppercase text-base py-1 bg-white rounded-xl font-semibold">Login</button>
    </div>
</body>

</html>
