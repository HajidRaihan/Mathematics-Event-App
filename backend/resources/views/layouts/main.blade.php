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
            /* background: rgb(115, 192, 128);
            background: linear-gradient(90deg, rgba(115, 192, 128, 1) 0%, rgba(200, 234, 209, 1) 50%); */
        }
    </style>
    @vite('resources/css/app.css')
</head>

<body>
    <nav class="flex justify-between mx-32 h-20 items-center">
        <div>
            <p>logo</p>
        </div>
        <div class="flex gap-5 uppercase text-primary font-semibold">
            <a href="{{route('home')}}">Home</a>
            <a href="">Pengumuman</a>
            <a href="{{route('pendaftaran')}}">pendaftaran</a>
            <a href="{{route('instansi')}}">instansi</a>
        </div>
    </nav>

    @yield('content')
</body>

</html>
