import { NextResponse } from 'next/server';

export const GET = async () => {
  return NextResponse.json({ message: 'Hello From Server' });
};

export const POST = async (req: Request) => {
  return NextResponse.json({ message: 'Hello From Server' });
};

export const DELETE = async () => {
  return NextResponse.json({ message: 'Hello From Server' });
};

export const PUT = async () => {
  return NextResponse.json({ message: 'Hello From Server' });
};

export const PATCH = async () => {
  return NextResponse.json({ message: 'Hello From Server' });
};
