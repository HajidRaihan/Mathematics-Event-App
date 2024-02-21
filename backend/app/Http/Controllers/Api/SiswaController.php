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
        $data = Siswa::with('Instansi')->orderBy('id','asc')->get();
        if ($data->isNotEmpty()) {
            $data->transform(function ($item) {
                $item->instansi_id = $item->Instansi ? $item->Instansi->instansi : null;
                return $item;
            });

            return response()->json([
                'status' => true,
                'message' => 'Data Ditemukan',
                'data' => $data->toArray()
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Data Tidak Ditemukan'
            ], 404);
        }
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
            'rapor'=>'required|file|mimes:pdf|max:512',
            'regional'=>'required'
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
                'regional'=>strtoupper($request->input('regional')),
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
        $data = Siswa::with('Instansi')->find($id);
        if($data){
            $instansiNama = $data->Instansi ? $data->Instansi->instansi : null;
            return response()->json([
                'status'=>true,
                'message'=>'Data Ditemukan',
                'data' => [
                    'id' => $data->id,
                    'nama' => $data->nama,
                    'nisn' => $data->nisn,
                    'jenis_kelamin' => $data->jenis_kelamin,
                    'instansi_nama' => $instansiNama,
                    'kontak' => $data->kontak,
                    'email' => $data->email,
                    'foto' => $data->foto,
                    'rapor' => $data->rapor,
                    'regional'=>$data->regional,
                    'status' => $data->status,
                    'username'=>$data->username,
                    'password'=>$data->password,
                    'created_at' => $data->created_at,
                    'updated_at' => $data->updated_at
                ]
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
            'username'=>'required',
            'password'=>'required',
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
            'username'=>$request->input('username'),
            'password'=>$request->input('password')
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
