@extends('layouts.main')

@section('content')
    <div class="mt-10 flex flex-col mx-52 gap-3">
        <form class="flex flex-col gap-5 w-[500px]" action="{{url('add_peserta')}}" enctype="multipart/form-data" method="POST">
            @csrf
            <div>
                <label for="nama" class="text-primary font-bold">Nama</label>
                <input type="text" id="nama" name="nama" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3" @required(true)>
            </div>
            <div>
                <label for="nama" class="text-primary font-bold">NISN/NIM</label>
                <input type="text" id="nim" name="nisn/nim" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3" @required(true)>
            </div>
            <div class="flex gap-3">
                <div>
                    <label for="tanggal" class="text-primary font-bold">Tanggal Lahir</label>
                    <input type="date" id="tanggal" name="tanggal_lahir" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3" @required(true)>
                </div>
                <div>
                    <label for="jenis_kelamin" class="text-primary font-bold">Jenis Kelamin</label>
                    <select name="jenis_kelamin" id="jenis_kelamin"
                        class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary px-3">
                        <option value="laki-laki">Laki-Laki</option>
                        <option value="perempuan">Perempuan</option>
                    </select>
                </div>
            </div>
            <div class="flex gap-3">
                <div>
                    <label for="jenjang" class="text-primary font-bold">Jenjang Pendidikan</label>
                    <select name="jenjang_pendidikan" id="jenjang"
                        class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary px-3">
                        <option value="mahasiswa">Mahasiswa</option>
                        <option value="sma">SMA</option>
                    </select>
                </div>
                <div>
                    <label for="jenjang" class="text-primary font-bold">Kelas/semester</label>
                    <input type="number" id="jenjang" name="kelas/semester"
                        class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
                </div>
            </div>
            <div>
                <label for="sekolah" class="text-primary font-bold">Nama Sekolah/Universitas</label>
                <input type="text" id="sekolah" name="sekolah/universitas" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
            </div>
            <div>
                <label for="kontak" class="text-primary font-bold">Kontak Whatsapp</label>
                <input type="text" id="kontak" name="kontak" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
            </div>
            <div>
                <label for="email" class="text-primary font-bold">Email</label>
                <input type="text" id="email" name="email" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
            </div>
            <div class="flex flex-col">
                <p class="text-primary font-bold mb-1">Unggah Foto</p>
                {{-- <label for="foto"
                    class="font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl">Unggah</label> --}}
                <input type="file" id="foto" name="foto"
                class="h-10 rounded-xl bg-white w-40 shadow-md shadow-secondary px-3">
            </div>
            <button class="rounded-xl border-2 border-primary h-10 w-40 font-semibold text-primary" type="submit" value="submit">Submit</button>
        </form>
    </div>
@endsection
