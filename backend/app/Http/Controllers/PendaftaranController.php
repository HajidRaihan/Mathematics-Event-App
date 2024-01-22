<?php

namespace App\Http\Controllers;

use App\Models\Instansi;
use App\Models\Siswa;
use App\Models\Mahasiswa;
use App\Models\Lkti;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PendaftaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function pendaftaran()
    {
        $instansis= Instansi::all();
        return view('pendaftaran',['instansis'=>$instansis]);
    }

    public function instansi()
    {
        return view('instansi');
    }

    public function mahasiswa()
    {
        $instansis= Instansi::all();
        return view('mahasiswa',['instansis'=>$instansis]);
    }

    public function lkti()
    {
        $instansis= Instansi::all();
        return view('lkti',['instansis'=>$instansis]);
    }

    public function add_instansi(Request $request)
    {
        Instansi::create([
            'instansi'=>$request->input('instansi'),
            'jenjang'=>$request->input('jenjang'),
            'provinsi'=>$request->input('provinsi'),
            'kota/kabupaten'=>$request->input('kota/kabupaten'),
            'alamat'=>$request->input('alamat'),
            'kontak_pendamping'=>$request->input('kontak_pendamping'),
            'email_pendamping'=>$request->input('email_pendamping'),
        ]);
        return redirect()->back()->with('success', 'Data berhasil disimpan');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function add_siswa(Request $request)
    {
        $request->validate([
            'gambar' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $fotoPath = $request->file('foto')->store('uploads', 'public');

        Siswa::create([
            'nama'=>$request->input('nama'),
            'nisn'=>$request->input('nisn'),
            'jenis_kelamin'=>$request->input('jenis_kelamin'),
            'instansi_id'=>$request->input('instansi_id'),
            'kontak'=>$request->input('kontak'),
            'email'=>$request->input('email'),
            'username'=>$request->input('username'),
            'foto'=>$fotoPath,
        ]);
        return redirect()->back()->with('success', 'Data berhasil disimpan');
    }

    public function add_mahasiswa(Request $request)
    {
        $request->validate([
            'gambar' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $fotoPath1 = $request->file('foto_1')->store('uploads', 'public');
        $fotoPath2 = $request->file('foto_2')->store('uploads', 'public');

        Mahasiswa::create([
            'anggota_1'=>$request->input('anggota_1'),
            'anggota_2'=>$request->input('anggota_2'),
            'nim_1'=>$request->input('nim_1'),
            'nim_2'=>$request->input('nim_2'),
            'jenis_kelamin_1'=>$request->input('jenis_kelamin_1'),
            'jenis_kelamin_2'=>$request->input('jenis_kelamin_2'),
            'instansi_id'=>$request->input('instansi_id'),
            'kontak_1'=>$request->input('kontak_1'),
            'kontak_2'=>$request->input('kontak_1'),
            'email_1'=>$request->input('email_1'),
            'email_2'=>$request->input('email_2'),
            'username'=>$request->input('username'),
            'foto_1'=>$fotoPath1,
            'foto_2'=>$fotoPath2,
        ]);
        return redirect()->back()->with('success', 'Data berhasil disimpan');
    }

    public function add_lkti(Request $request)
    {
        $request->validate([
            'gambar' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $fotoPath1 = $request->file('foto_1')->store('uploads', 'public');
        $fotoPath2 = $request->file('foto_2')->store('uploads', 'public');

        if ($request->hasFile('foto_3')){
            $fotoPath3 = $request->file('foto_3')->store('uploads', 'public');
        }else{
            $fotoPath3 = null;
        }


        Lkti::create([
            'anggota_1'=>$request->input('anggota_1'),
            'anggota_2'=>$request->input('anggota_2'),
            'anggota_3'=>$request->input('anggota_3'),
            'nim_1'=>$request->input('nim_1'),
            'nim_2'=>$request->input('nim_2'),
            'nim_3'=>$request->input('nim_3'),
            'jenis_kelamin_1'=>$request->input('jenis_kelamin_1'),
            'jenis_kelamin_2'=>$request->input('jenis_kelamin_2'),
            'jenis_kelamin_3'=>$request->input('jenis_kelamin_3'),
            'instansi_id'=>$request->input('instansi_id'),
            'kontak_1'=>$request->input('kontak_1'),
            'kontak_2'=>$request->input('kontak_2'),
            'kontak_3'=>$request->input('kontak_3'),
            'email_1'=>$request->input('email_1'),
            'email_2'=>$request->input('email_2'),
            'email_3'=>$request->input('email_3'),
            'username'=>$request->input('username'),
            'foto_1'=>$fotoPath1,
            'foto_2'=>$fotoPath2,
            'foto_3'=>$fotoPath3,
        ]);
        return redirect()->back()->with('success', 'Data berhasil disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
