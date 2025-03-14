<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PackageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('package', [PackageController::class, 'package'])->name('package');
Route::post('package', [PackageController::class, 'packageform'])->name('package.send');
Route::delete('package/delete/{id}',[PackageController::class, 'deletepackage'])->name('package.delete');