<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Package;
use Validator;

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

    public function packageform(Request $request){
        $request->validate([
            'title' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);
        $package = new Package;
        $package->title = $request->title;
        $package->price = $request->price;
        $package->description = $request->description;
        if($request->hasfile('image')){
            $imagepath = $request->file('image')->store('images','public');
            $package->image= $imagepath;
        }

        $package->save();

        return response()->json(['message'=> 'Package created succesfully'],201);
    }
}
