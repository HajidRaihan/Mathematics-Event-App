<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($gambar)
    {
    $extension = pathinfo($gambar, PATHINFO_EXTENSION);
    $mimeTypes = [
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'png' => 'image/png',
        'pdf' => 'file/pdf'
    ];
        if (!Storage::disk('public')->exists('uploads/' . $gambar)) {
            return response()->json([
                'status' => false,
                'message' => 'Gambar tidak ditemukan'
            ], 404);
        }

        $contentType = $mimeTypes[$extension] ?? 'image/jpeg';
        $imageUrl = storage_path('app/public/uploads/'). $gambar;

        return response()->file($imageUrl);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
