<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Instansi;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InstansiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Instansi::orderBy('id','asc')->get();
        if($data->isNotEmpty()){
            return response()->json([
                'status'=>true,
                'message'=>'Data Ditemukan',
                'data'=>$data
            ],200);
        }else{
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
            'instansi'=>'required',
            'jenjang'=>'required',
            'provinsi'=>'required',
            'kota/kabupaten'=>'required',
            'alamat'=>'required',
            'kontak_pendamping'=>'required',
            'email_pendamping'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>'Gagal Memasukkan Data',
                'data'=>$validator->errors()
            ]);
        }

        Instansi::create([
            'instansi'=>strtoupper($request->input('instansi')),
            'jenjang'=>$request->input('jenjang'),
            'provinsi'=>$request->input('provinsi'),
            'kota/kabupaten'=>$request->input('kota/kabupaten'),
            'alamat'=>$request->input('alamat'),
            'kontak_pendamping'=>$request->input('kontak_pendamping'),
            'email_pendamping'=>$request->input('email_pendamping'),
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
        $data = Instansi::find($id);
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
        $data = Instansi::find($id);
        if(empty($data)){
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Ditemukan'
            ],404);
        }

        $rules =[
            'instansi'=>'required',
            'jenjang'=>'required',
            'provinsi'=>'required',
            'kota/kabupaten'=>'required',
            'alamat'=>'required',
            'kontak_pendamping'=>'required',
            'email_pendamping'=>'required',
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
            'instansi'=>$request->input('instansi'),
            'jenjang'=>$request->input('jenjang'),
            'provinsi'=>$request->input('provinsi'),
            'kota/kabupaten'=>$request->input('kota/kabupaten'),
            'alamat'=>$request->input('alamat'),
            'kontak_pendamping'=>$request->input('kontak_pendamping'),
            'email_pendamping'=>$request->input('email_pendamping'),
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
        try {
            $data = Instansi::findOrFail($id);

            $data->delete();

            return response()->json([
                'status' => true,
                'message' => 'Data berhasil dihapus'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        } catch (QueryException $e) {
            if ($e->errorInfo[1] === 1451) {
                return response()->json([
                    'status' => false,
                    'message' => 'Tidak dapat menghapus data karena memiliki relasi dengan data lain.'
                ], 422);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Terjadi kesalahan saat menghapus data.'
                ], 500);
            }
        }

    }
}
