import { NextResponse } from 'next/server';
import connectToDB from '@/config/mongodb';
import ChartDataModel from '@/models/ChartDataModel';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectToDB();

    const chartData = await ChartDataModel.find({}).lean();

    if (chartData.length === 0) {
      return new NextResponse(JSON.stringify({ message: 'No data found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const formattedData = chartData.map(({ month, value }) => ({ month, value }));

    return new NextResponse(JSON.stringify(formattedData), {
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