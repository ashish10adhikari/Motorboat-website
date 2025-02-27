<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Package;

class PackageController extends Controller
{
    public function package(){
        $package = Package::all();
        $data =[
           " package" => $package,
            "message" => 200
        ];
        return response()->json($data);
    }
}
