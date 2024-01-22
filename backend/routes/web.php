<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PendaftaranController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/login', function () {
    return view('login');
})->name('login');

Route::get('/pendaftaran/siswa', [PendaftaranController::class,'pendaftaran'])->name('pendaftaran');
Route::get('/pendaftaran/mahasiswa',[PendaftaranController::class,'mahasiswa'])->name('mahasiswa');
Route::get('/pendaftaran/lkti',[PendaftaranController::class,'lkti'])->name('lkti');
Route::get('pendaftaran/instansi',[PendaftaranController::class,'instansi'])->name('instansi');
Route::post('/add_instansi',[PendaftaranController::class,'add_instansi'])->name('add_instansi');
Route::post('/add_siswa',[PendaftaranController::class,'add_siswa'])->name('add_peserta');
Route::post('/add_mahasiswa',[PendaftaranController::class,'add_mahasiswa'])->name('add_mahasiswa');
Route::post('/add_lkti',[PendaftaranController::class,'add_lkti'])->name('add_lkti');

Route::get('/admin/dashboard', function () {
    return view('dashboard');
});
