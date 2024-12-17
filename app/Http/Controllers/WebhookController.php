<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebhookController extends Controller
{
    public function handleInstagram(Request $request)
    {
        return response()->json(['message' => 'Hello, Instagram is working!']);
    }
    public function handleFacebook(Request $request)
    {
        return response()->json(['message' => 'Hello, Facebook is working!']);
    }
    public function handleLinkedin(Request $request)
    {
        return response()->json(['message' => 'Hello, Linkedin is working!']);
    }
}
