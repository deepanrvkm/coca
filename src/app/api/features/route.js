// src/app/api/features/route.js
import { NextResponse } from 'next/server';
import connectToDB from '@/config/mongodb';
import FeatureModel from '@/models/FeatureModel';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await connectToDB();

        const features = await FeatureModel.find({}).lean();

        if (features.length === 0) {
            return new NextResponse(JSON.stringify({ message: 'No data found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new NextResponse(JSON.stringify(features), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({
            message: 'Internal server error',
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
