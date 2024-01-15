<?php

namespace App\Http\Controllers;

use App\Models\Peserta;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function pendaftaran()
    {
        return view('pendaftaran');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function add_peserta(Request $request)
    {
        $request->validate([
            'gambar' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $fotoPath = $request->file('foto')->store('uploads', 'public');

        Peserta::create([
            'nama'=>$request->input('nama'),
            'tanggal_lahir'=>$request->input('tanggal_lahir'),
            'nisn/nim'=>$request->input('nisn/nim'),
            'jenis_kelamin'=>$request->input('jenis_kelamin'),
            'jenjang_pendidikan'=>$request->input('jenjang_pendidikan'),
            'sekolah/universitas'=>$request->input('sekolah/universitas'),
            'kelas/semester'=>$request->input('kelas/semester'),
            'kontak'=>$request->input('kontak'),
            'email'=>$request->input('email'),
            'foto'=>$fotoPath,
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
