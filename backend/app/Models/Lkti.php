<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Lkti extends Model
{
    use HasFactory;
    protected $fillable=[
        'anggota_1',
        'anggota_2',
        'anggota_3',
        'nim_1',
        'nim_2',
        'nim_3',
        'jenis_kelamin_1',
        'jenis_kelamin_2',
        'jenis_kelamin_3',
        'instansi_id',
        'kontak_1',
        'kontak_2',
        'kontak_3',
        'email_1',
        'email_2',
        'email_3',
        'foto_1',
        'foto_2',
        'foto_3',
        'username',
        'status',
    ];
    public function instansi(): BelongsTo
    {
        return $this->belongsTo(Instansi::class,'instansi_id');
    }
}
