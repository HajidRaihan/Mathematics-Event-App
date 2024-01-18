<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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
});

Route::get('/pendaftaran', [UserController::class,'pendaftaran'])->name('pendaftaran');
Route::post('/add_peserta',[UserController::class,'add_peserta'])->name('add_peserta');

Route::get('/admin/dashboard', function () {
    return view('dashboard');
});
