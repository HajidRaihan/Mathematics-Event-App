<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Siswa;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Siswa::orderBy('id','asc')->get();
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
            'nama'=>'required',
            'nisn'=>'required',
            'jenis_kelamin'=>'required',
            'instansi_id'=>'required',
            'kontak'=>'required',
            'email'=>'required',
            'foto'=>'required|image|mimes:jpeg,png,jpg|max:512',
            'rapor'=>'required|image|mimes:jpeg,png,jpg|max:512',
        ];

        $validator = Validator::make($request->all(),$rules);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>'Gagal Memasukkan Data',
                'data'=>$validator->errors()
            ]);
        }
        try{
            $fotoPath1 = $request->file('foto')->store('uploads', 'public');
            $fotoPath2 = $request->file('rapor')->store('uploads', 'public');
            Siswa::create([
                'nama'=>$request->input('nama'),
                'nisn'=>$request->input('nisn'),
                'jenis_kelamin'=>$request->input('jenis_kelamin'),
                'instansi_id'=>$request->input('instansi_id'),
                'kontak'=>$request->input('kontak'),
                'email'=>$request->input('email'),
                'foto'=>$fotoPath1,
                'rapor'=>$fotoPath2,
            ]);
            return response()->json([
                'status'=>true,
                'message'=>'Sukses Memasukkan Data'
            ],200);
        }catch(QueryException $e){
            if ($e->errorInfo[1] === 1452) {
                return response()->json([
                    'status' => false,
                    'message' => 'Tidak dapat menambahkan data, instansi_id tidak ditemukan.'
                ], 422);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Data sudah terdaftar.'
                ], 500);
            }
        }


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Siswa::find($id);
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
        $data = Siswa::find($id);
        if(empty($data)){
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Ditemukan'
            ],404);
        }

        $rules =[
            'status'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>'Gagal Mengupdate Data',
                'data'=>$validator->errors()
            ]);
        }

        $data->update([
            'status'=>$request->input('status'),
        ]);
        return response()->json([
            'status'=>true,
            'message'=>'Sukses Mengupdate Data'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data= Siswa::find($id);
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
