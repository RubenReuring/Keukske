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

// BASIC ROUTING
Route::get('/', function () { return redirect('https://reuring.studio'); });

// KEUKSKE ACTIE
Route::get('/keukske-verify', function () { return view('welcome'); });
Route::get('/keukske-actie', [\App\Http\Controllers\Keukske::class, 'matchCode']);
Route::get('/keukske-verifycode', [\App\Http\Controllers\Keukske::class, 'checkCode']);

// AMA QR REDIRECTS
Route::get('/ama-group/2K23-QR-001', function () { return redirect('https://www.ama-group.info/ama-projecten/dotterbloem-8'); });
Route::get('/ama-group/2K23-QR-002', function () { return redirect('https://www.ama-group.info/ama-projecten/dotterbloem-10'); });

// 360 Experience
Route::get('/spherestory/flexibility-limburg', function () { return view('spherestory/flexibility-limburg'); });
Route::get('/spherestory/munckhof-01', function () { return view('spherestory/munckhof-01'); });
Route::get('/spherestory/janssengroep-01', function () { return view('spherestory/janssen-01'); });
Route::get('/spherestory/umc-utrecht', function () { return view('spherestory/umc-utrecht'); });
Route::get('/spherestory/the-spot', function () { return view('spherestory/the-spot'); });
