<?php

use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\InstansiController;
use App\Http\Controllers\Api\LktiController;
use App\Http\Controllers\Api\MahasiswaController;
use App\Http\Controllers\Api\SiswaController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});

Route::apiResource('instansi',InstansiController::class);
Route::apiResource('siswa',SiswaController::class);
Route::apiResource('mahasiswa',MahasiswaController::class);
Route::apiResource('lkti',LktiController::class);
Route::apiResource('user',UserController::class);
Route::get('uploads/{gambar}',[ImageController::class,'show']);
