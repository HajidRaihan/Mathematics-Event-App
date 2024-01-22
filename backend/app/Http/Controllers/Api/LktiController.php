<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lkti;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LktiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Lkti::orderBy('id','asc')->get();
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
            'foto_1' => 'image|mimes:jpeg,png,jpg|max:2048',
            'foto_2' => 'image|mimes:jpeg,png,jpg|max:2048',
            'foto_3' => 'image|mimes:jpeg,png,jpg|max:2048',
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
        $data = Lkti::find($id);
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
        $data= Lkti::find($id);
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
