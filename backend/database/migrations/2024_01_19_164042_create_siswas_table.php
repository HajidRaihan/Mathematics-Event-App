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
        Schema::create('siswas', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('nisn')->unique();
            $table->string('jenis_kelamin');
            $table->UnsignedBigInteger('instansi_id');
            $table->string('kontak');
            $table->string('email');
            $table->string('foto',512);
            $table->string('rapor',512);
            $table->string('username')->nullable();
            $table->string('password')->nullable();
            $table->string('status')->default('belum lunas');
            $table->timestamps();

            $table->foreign('instansi_id')->references('id')->on('instansis');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('siswas');
    }
};
