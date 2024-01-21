<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use illuminate\Database\Eloquent\Relations\HasMany;

class Instansi extends Model
{
    use HasFactory;
    protected $fillable=[
        'instansi',
        'jenjang',
        'provinsi',
        'kota/kabupaten',
        'alamat',
        'kontak_pendamping',
        'email_pendamping',
    ];
    public function instansi(): HasMany
    {
        return $this->hasMany(Instansi::class);
    }
}
