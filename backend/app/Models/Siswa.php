<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    use HasFactory;

    protected $fillable =[
        'nama',
        'nisn',
        'jenis_kelamin',
        'instansi_id',
        'kontak',
        'email',
        'foto',
        'username',
     ];

    public function instansi(): BelongsTo
    {
        return $this->belongsTo(Instansi::class,'instansi_id');
    }
}
