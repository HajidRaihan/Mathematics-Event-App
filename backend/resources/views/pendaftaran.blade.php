@extends('layouts.main')

@section('content')
    <div class="mt-10 flex flex-col mx-52 gap-3">
        <form class="flex flex-col gap-5 w-[500px]">
            <div>
                <label for="nama" class="text-primary font-bold">Nama</label>
                <input type="text" id="nama" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
            </div>
            <div>
                <label for="tanggal" class="text-primary font-bold">Tanggal Lahir</label>
                <input type="date" id="tanggal" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
            </div>
            <div class="flex gap-3">
                <div>
                    <label for="jenjang" class="text-primary font-bold">Jenjang Pendidikan</label>
                    <select name="jenjang" id="jenjang"
                        class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary px-3">
                        <option value="mahasiswa">Mahasiswa</option>
                        <option value="sma">SMA</option>
                    </select>
                </div>
                <div>
                    <label for="jenjang" class="text-primary font-bold">Kelas/semester</label>
                    <input type="text" id="jenjang"
                        class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
                </div>
            </div>
            <div>
                <label for="sekolah" class="text-primary font-bold">Nama Sekolah/Universitas</label>
                <input type="text" id="sekolah" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
            </div>
            <div class="flex flex-col">
                <p class="text-primary font-bold mb-1">Unggah Foto</p>
                <label for="foto"
                    class="font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl">Unggah</label>
                <input type="file" id="foto"
                    class="h-10 rounded-xl bg-white w-40 shadow-md shadow-secondary px-3 hidden">
            </div>
            <button class="rounded-xl border-2 border-primary h-10 w-40 font-semibold text-primary">Submit</button>
        </form>
    </div>
@endsection
