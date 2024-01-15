<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
    use HasFactory;

    protected $fillable =[
       'nama',
       'tanggal_lahir',
       'nisn/nim',
       'jenis_kelamin',
       'jenjang_pendidikan',
       'sekolah/universitas',
       'kelas/semester',
       'kontak',
       'email',
       'foto',
    ];
}
