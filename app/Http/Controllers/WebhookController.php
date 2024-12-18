<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class WebhookController extends Controller
{
    public function handleInstagram(Request $request)
    {
        $signature = $request->header('X-Webflow-Signature');
        $validSignatures = [
            'cabdc5b4d50bd30ba707db1dbf01ad7530ac8d1c036fcac9458c227015cbaed7',
            'bb57153b0f09fc0a3118839dd760dfb54ce027bfa8bb8cafb70fc55c5f4c3a3c',
        ];

        if (in_array($signature, $validSignatures)) {
            Log::info('Valid Webhook Signature:', ['signature' => $signature]);
            return response()->json(['message' => 'Valid signature.']);
        }

        Log::warning('Invalid Webhook Signature:', ['signature' => $signature]);
        return response()->json(['error' => 'Invalid signature.'], 403);
    }
    public function handleFacebook(Request $request)
    {
        $signature = $request->header('X-Webflow-Signature');
        $validSignatures = [
            'cabdc5b4d50bd30ba707db1dbf01ad7530ac8d1c036fcac9458c227015cbaed7',
            'bb57153b0f09fc0a3118839dd760dfb54ce027bfa8bb8cafb70fc55c5f4c3a3c',
        ];

        if (in_array($signature, $validSignatures)) {
            Log::info('Valid Webhook Signature:', ['signature' => $signature]);
            return response()->json(['message' => 'Valid signature.']);
        }

        Log::warning('Invalid Webhook Signature:', ['signature' => $signature]);
        return response()->json(['error' => 'Invalid signature.'], 403);
    }
    public function handleLinkedin(Request $request)
    {
        $signature = $request->header('X-Webflow-Signature');
        $validSignatures = [
            'cabdc5b4d50bd30ba707db1dbf01ad7530ac8d1c036fcac9458c227015cbaed7',
            'bb57153b0f09fc0a3118839dd760dfb54ce027bfa8bb8cafb70fc55c5f4c3a3c',
        ];

        if (in_array($signature, $validSignatures)) {
            Log::info('Valid Webhook Signature:', ['signature' => $signature]);
            return response()->json(['message' => 'Valid signature.']);
        }

        Log::warning('Invalid Webhook Signature:', ['signature' => $signature]);
        return response()->json(['error' => 'Invalid signature.'], 403);

    }
}
