@extends('layouts.main')

@section('content')
<div class="mt-10 flex flex-col mx-52 gap-3">
    <form class="flex flex-col gap-5 w-[500px]" action="{{url('add_instansi')}}" enctype="multipart/form-data" method="POST">
        @csrf
        <div>
            <label for="nama" class="text-primary font-bold">Instansi</label>
            <input type="text" id="instansi" name="instansi" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3" @required(true)>
        </div>
        <div>
            <div>
                <label for="jenis_kelamin" class="text-primary font-bold">Jenjang</label>
                <select name="jenjang" id="jenjang"
                    class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary px-3">
                    <option value="sma">SMA</option>
                    <option value="perguruan tinggi">Perguruan Tinggi</option>
                </select>
            </div>
        <div>
            <label for="jenjang" class="text-primary font-bold">Provinsi</label>
            <input type="text" id="provinsi" name="provinsi"
                class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
        </div>

        <div>
            <label for="sekolah" class="text-primary font-bold">Kota/Kabupaten</label>
            <input type="text" id="kota/kabupaten" name="kota/kabupaten" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
        </div>
        <div>
            <label for="kontak" class="text-primary font-bold">Alamat</label>
            <input type="text" id="alamat" name="alamat" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
        </div>
        <div>
            <label for="email" class="text-primary font-bold">Kontak Pendamping</label>
            <input type="text" id="kontak_pendamping" name="kontak_pendamping" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
        </div>
        <div>
            <label for="email" class="text-primary font-bold">Email Pendamping</label>
            <input type="text" id="email_pendamping" name="email_pendamping" class="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3">
        </div>
        <button class="rounded-xl border-2 border-primary h-10 w-40 font-semibold text-primary" type="submit" value="submit">Submit</button>
    </form>
</div>
@endsection
