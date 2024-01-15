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
        Schema::create('pesertas', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->date('tanggal_lahir');
            $table->string('nisn/nim')->unique();
            $table->string('jenis_kelamin');
            $table->string('jenjang_pendidikan');
            $table->string('sekolah/universitas');
            $table->bigInteger('kelas/semester');
            $table->string('kontak');
            $table->string('email');
            $table->string('foto',2048);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pesertas');
    }
};
