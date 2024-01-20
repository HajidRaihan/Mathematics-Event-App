<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mahasiswas', function (Blueprint $table) {
            $table->id();
            $table->string('anggota_1');
            $table->string('anggota_2');
            $table->string('nim_1')->unique();
            $table->string('nim_2')->unique();
            $table->string('jenis_kelamin_1');
            $table->string('jenis_kelamin_2');
            $table->UnsignedBigInteger('instansi_id');
            $table->string('kontak_1');
            $table->string('kontak_2');
            $table->string('email_1');
            $table->string('email_2');
            $table->string('foto_1',2048);
            $table->string('foto_2',2048);
            $table->string('username');
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mahasiswas');
    }
};
