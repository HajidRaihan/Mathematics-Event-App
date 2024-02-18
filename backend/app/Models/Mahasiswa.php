<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Mahasiswa extends Model
{
    use HasFactory;
    protected $fillable=[
        'anggota_1',
        'anggota_2',
        'nim_1',
        'nim_2',
        'jenis_kelamin_1',
        'jenis_kelamin_2',
        'instansi_id',
        'kontak_1',
        'kontak_2',
        'email_1',
        'email_2',
        'foto_1',
        'foto_2',
        'aktif_1',
        'aktif_2',
        'status',
    ];
    public function instansi(): BelongsTo
    {
        return $this->belongsTo(Instansi::class,'instansi_id');
    }
}
