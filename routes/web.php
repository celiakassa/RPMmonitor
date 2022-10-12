<?php

use App\Http\Controllers\RpmController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('dashboard');
// });
Route::get('/', [RpmController::class,'index']);
Route::get('/sbin', [RpmController::class,'sbin']);
Route::get('/isocel', [RpmController::class,'isocel']);
Route::get('/mtn', [RpmController::class,'mtn']);
Route::get('/moov', [RpmController::class,'moov']);
Route::get('/gmbh', [RpmController::class,'gmbh']);