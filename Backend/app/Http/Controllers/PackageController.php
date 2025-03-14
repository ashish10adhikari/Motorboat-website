<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Package;
use Validator;

class PackageController extends Controller
{
    public function package() {
        $package = Package::all();
        return response()->json([
            "package" => $package
        ], 200);
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

    public function deletepackage($id){
        $package = Package::find($id);
        $package-> delete();
        return response()->json(['message'=> 'Package deleted successfully'],201);
    }
}
