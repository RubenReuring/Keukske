<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/keukske-verify', function () {
    return view('welcome');
});

Route::get('/keukske-actie', [\App\Http\Controllers\Keukske::class, 'matchCode']);
Route::get('/keukske-verifycode', [\App\Http\Controllers\Keukske::class, 'checkCode']);
Route::get('/ama-group/2K23-QR-001', function () { return redirect('http:/google.com'); });
