import { NextResponse } from 'next/server';
import connectToDB from '@/config/mongodb';
import TestimonialModel from '@/models/TestimonialModel';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectToDB();

    const testimonials = await TestimonialModel.find({}).lean();

    if (testimonials.length === 0) {
      return new NextResponse(JSON.stringify({ message: 'No data found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new NextResponse(JSON.stringify(testimonials), {
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
