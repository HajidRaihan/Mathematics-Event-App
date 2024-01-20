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
        Schema::create('lktis', function (Blueprint $table) {
            $table->id();
            $table->string('anggota_1');
            $table->string('anggota_2');
            $table->string('anggota_3')->nullable();
            $table->string('nim_1')->unique();
            $table->string('nim_2')->unique();
            $table->string('nim_3')->nullable()->unique();
            $table->UnsignedBigInteger('instansi_id');
            $table->string('kontak_1');
            $table->string('kontak_2');
            $table->string('kontak_3')->nullable();
            $table->string('email_1');
            $table->string('email_2');
            $table->string('email_3')->nullable();
            $table->string('foto_1',2048);
            $table->string('foto_2',2048);
            $table->string('foto_3',2048)->nullable();
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
        Schema::dropIfExists('lktis');
    }
};
