<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Mahasiswa::orderBy('id','asc')->get();
        return response()->json([
            'status'=>true,
            'message'=>'Data Ditemukan',
            'data'=>$data
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules =[
            'anggota_1'=>'required',
            'anggota_2'=>'required',
            'nim_1'=>'required',
            'nim_2'=>'required',
            'jenis_kelamin_1'=>'required',
            'jenis_kelamin_2'=>'required',
            'instansi_id'=>'required',
            'kontak_1'=>'required',
            'kontak_2'=>'required',
            'email_1'=>'required',
            'email_2'=>'required',
            'username'=>'required',
            'foto_1' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'foto_2' =>'required|image|mimes:jpeg,png,jpg|max:2048',
        ];

        $validator = Validator::make($request->all(),$rules);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>'Gagal Memasukkan Data',
                'data'=>$validator->errors()
            ]);
        }

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
            'kontak_2'=>$request->input('kontak_2'),
            'email_1'=>$request->input('email_1'),
            'email_2'=>$request->input('email_2'),
            'username'=>$request->input('username'),
            'foto_1'=>$fotoPath1,
            'foto_2'=>$fotoPath2,
        ]);
        return response()->json([
            'status'=>true,
            'message'=>'Sukses Memasukkan Data'
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Mahasiswa::find($id);
        if($data){
            return response()->json([
                'status'=>true,
                'message'=>'Data Ditemukan',
                'data'=>$data
            ],200);
        }else{
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Ditemukan'
            ],404);
        }
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
        $data= Mahasiswa::find($id);
        if(empty($data)){
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Ditemukan'
            ],404);
        }else{
            $data->delete();
            return response()->json([
                'status'=>true,
                'message'=>'Sukses Mengapus Data'
            ]);
        }
    }
}
