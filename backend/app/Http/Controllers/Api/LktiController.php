<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lkti;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LktiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Lkti::with('Instansi')->orderBy('id','asc')->get();
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
            'foto_1' => 'required|image|mimes:jpeg,png,jpg|max:512',
            'foto_2' => 'required|image|mimes:jpeg,png,jpg|max:512',
            'foto_3' => 'image|mimes:jpeg,png,jpg|max:512',
            'aktif_1' => 'required|image|mimes:jpeg,png,jpg|max:512',
            'aktif_2' => 'required|image|mimes:jpeg,png,jpg|max:512',
            'aktif_3' => 'image|mimes:jpeg,png,jpg|max:512',
            'formulir' => 'required|file|mimes:pdf|max:512',
            'orisinalitas' => 'required|file|mimes:pdf|max:512',
            'abstrak' => 'required|file|mimes:pdf|max:512',
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
            $fotoPath1 = $request->file('foto_1')->store('uploads', 'public');
            $fotoPath2 = $request->file('foto_2')->store('uploads', 'public');
            if ($request->hasFile('foto_3')){
                $fotoPath3 = $request->file('foto_3')->store('uploads', 'public');
            }else{
                $fotoPath3 = null;
            }
            $fotoPath4 = $request->file('aktif_1')->store('uploads', 'public');
            $fotoPath5 = $request->file('aktif_2')->store('uploads', 'public');
            if ($request->hasFile('aktif_3')){
                $fotoPath6 = $request->file('aktif_3')->store('uploads', 'public');
            }else{
                $fotoPath6 = null;
            }
            $fotoPath7 = $request->file('formulir')->store('uploads', 'public');
            $fotoPath8 = $request->file('orisinalitas')->store('uploads', 'public');
            $fotoPath9 = $request->file('abstrak')->store('uploads', 'public');
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
                'foto_1'=>$fotoPath1,
                'foto_2'=>$fotoPath2,
                'foto_3'=>$fotoPath3,
                'aktif_1'=>$fotoPath4,
                'aktif_2'=>$fotoPath5,
                'aktif_3'=>$fotoPath6,
                'formulir'=>$fotoPath7,
                'orisinalitas'=>$fotoPath8,
                'abstrak'=>$fotoPath9,
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
        $data = Lkti::with('Instansi')->find($id);
        if($data){
            $instansiNama = $data->Instansi ? $data->Instansi->instansi : null;
            return response()->json([
                'status'=>true,
                'message'=>'Data Ditemukan',
                'data' => [
                    'id' => $data->id,
                    'anggota_1' => $data->anggota_1,
                    'anggota_2' => $data->anggota_2,
                    'anggota_3' => $data->anggota_3,
                    'nim_1' => $data->nim_1,
                    'nim_2' => $data->nim_2,
                    'nim_3' => $data->nim_3,
                    'jenis_kelamin_1' => $data->jenis_kelamin_1,
                    'jenis_kelamin_2' => $data->jenis_kelamin_2,
                    'jenis_kelamin_3' => $data->jenis_kelamin_3,
                    'instansi_nama' => $instansiNama,
                    'kontak_1' => $data->kontak_1,
                    'kontak_2' => $data->kontak_2,
                    'kontak_3' => $data->kontak_3,
                    'email_1' => $data->email_1,
                    'email_2' => $data->email_2,
                    'email_3' => $data->email_3,
                    'foto_1' => $data->foto_1,
                    'foto_2' => $data->foto_2,
                    'foto_3' => $data->foto_3,
                    'aktif_1' => $data->aktif_1,
                    'aktif_2' => $data->aktif_2,
                    'aktif_3' => $data->aktif_3,
                    'formulir' => $data->formulir,
                    'orisinalitas' => $data->orisinalitas,
                    'abstrak' => $data->abstrak,
                    'status' => $data->status,
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
        $data = Lkti::find($id);
        if(empty($data)){
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Ditemukan'
            ],404);
        }

        $rules =[
            'status'=>'nullable',
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
            'status'=>$request->input('status') ?? $data->status,
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
