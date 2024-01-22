@extends('layouts.main')
@section('content')
<div class="mt-10 flex flex-col mx-52 gap-3">
    <form class="flex flex-col gap-5 w-[500px]" action="{{url('add_lkti')}}" enctype="multipart/form-data" method="POST">
        @csrf
        <div>
            <label for="nama_1" class="text-primary font-bold">Anggota 1</label>
            <input type="text" id="anggota_1" name="anggota_1" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3" @required(true)>
        </div>
        <div>
            <label for="nama_2" class="text-primary font-bold">Anggota 2</label>
            <input type="text" id="anggota_1" name="anggota_2" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3" @required(true)>
        </div>
        <div>
            <label for="nama_3" class="text-primary font-bold">Anggota 3(tidak wajib)</label>
            <input type="text" id="anggota_3" name="anggota_3" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
        </div>
        <div>
            <label for="nim_1" class="text-primary font-bold">NIM 1</label>
            <input type="text" id="nim_1" name="nim_1" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3" @required(true)>
        </div>
        <div>
            <label for="nim_2" class="text-primary font-bold">NIM 2</label>
            <input type="text" id="nim_2" name="nim_2" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3" @required(true)>
        </div>
        <div>
            <label for="nim_3" class="text-primary font-bold">NIM 3(tidak wajib)</label>
            <input type="text" id="nim_3" name="nim_3" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
        </div>
            <div>
                <label for="jenis_kelamin_1" class="text-primary font-bold">Jenis Kelamin 1</label>
                <select name="jenis_kelamin_1" id="jenis_kelamin_1"
                    class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary px-3">
                    <option value="laki-laki">Laki-Laki</option>
                    <option value="perempuan">Perempuan</option>
                </select>
            </div>
            <div>
                <label for="jenis_kelamin_2" class="text-primary font-bold">Jenis Kelamin 2</label>
                <select name="jenis_kelamin_2" id="jenis_kelamin_2"
                    class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary px-3">
                    <option value="laki-laki">Laki-Laki</option>
                    <option value="perempuan">Perempuan</option>
                </select>
            </div>
            <div>
                <label for="jenis_kelamin_3" class="text-primary font-bold">Jenis Kelamin 3 (tidak wajib)</label>
                <select name="jenis_kelamin_3" id="jenis_kelamin_3"
                    class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary px-3">
                    <option value=""></option>
                    <option value="laki-laki">Laki-Laki</option>
                    <option value="perempuan">Perempuan</option>
                </select>
            </div>
        <div>

            <label for="jenis_kelamin" class="text-primary font-bold">kampus (jika kampus ada tidak ada mohon daftarkan terlebih dahulu di instansi)</label>
            <select name="instansi_id" id="instansi_id"
                class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary px-3">
                @foreach ($instansis as $instansis )
                @if($instansis->jenjang =='perguruan tinggi')
                <option value="{{$instansis->id}}">{{$instansis->instansi}}</option>
                @endif
                @endforeach
            </select>
        </div>
        <div>
            <label for="kontak" class="text-primary font-bold">Kontak WA 1</label>
            <input type="text" id="kontak_1" name="kontak_1" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3" @required(true)>
        </div>
        <div>
            <label for="kontak" class="text-primary font-bold">Kontak WA 2</label>
            <input type="text" id="kontak_2" name="kontak_2" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3" @required(true)>
        </div>
        <div>
            <label for="kontak" class="text-primary font-bold">Kontak WA 3 (tidak wajib)</label>
            <input type="text" id="kontak_3" name="kontak_3" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
        </div>
        <div>
            <label for="email" class="text-primary font-bold">Email 1</label>
            <input type="email" id="email_1" name="email_1" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3 " @required(true)>
        </div>
        <div>
            <label for="email" class="text-primary font-bold">Email 2</label>
            <input type="email" id="email_2" name="email_2" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3 " @required(true)>
        </div>
        <div>
            <label for="email" class="text-primary font-bold">Email 3(tidak wajib)</label>
            <input type="email" id="email_3" name="email_3" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3 ">
        </div>
        <div>
            <label for="username" class="text-primary font-bold">Username</label>
            <input type="text" id="username" name="username" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3" @required(true)>
        </div>
        <div class="flex flex-col">
            <p class="text-primary font-bold mb-1">Unggah Foto 1</p>
            <input type="file" id="foto_1" name="foto_1"
            class="h-10 rounded-xl bg-white shadow-md shadow-secondary px-3">
        </div>
        <div class="flex flex-col">
            <p class="text-primary font-bold mb-1">Unggah Foto 2</p>
            <input type="file" id="foto_2" name="foto_2"
            class="h-10 rounded-xl bg-white shadow-md shadow-secondary px-3">
        </div>
        <div class="flex flex-col">
            <p class="text-primary font-bold mb-1">Unggah Foto 3 (tidak wajib)</p>
            <input type="file" id="foto_3" name="foto_3"
            class="h-10 rounded-xl bg-white shadow-md shadow-secondary px-3">
        </div>
        <button class="rounded-xl border-2 border-primary h-10 w-40 font-semibold text-primary" type="submit" value="submit">Submit</button>
    </form>
</div>
@endsection
