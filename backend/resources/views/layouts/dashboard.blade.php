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
    <div class="flex gap-3">
        <aside class="w-52 border border-black h-screen p-5 flex flex-col gap-3">
            <div class="flex items-center gap-2">
                <img src="/asset/icon/dashboard-icon.svg" alt="dashboardicon" class="h-5  w-5">
                <p class="text-primary text-sm  font-semibold">Dashboard</p>
            </div>
            <div class="flex items-center gap-2">
                <img src="/asset/icon/peserta-icon.svg" alt="dashboardicon" class="h-5  w-5">
                <p class="text-primary text-sm font-semibold">Daftar Peserta</p>
            </div>
            <div class="flex items-center gap-2">
                <img src="/asset/icon/school-icon.svg" alt="dashboardicon" class="h-5  w-5">
                <p class="text-primary text-sm font-semibold">Daftar Sekolah</p>
            </div>
        </aside>
        @yield('content')
    </div>

</body>

</html>
