 import { NextResponse } from "next/server"

// API skeleton — works before installing Prisma or Zod
export async function POST(request: Request) {
  const {name,email,phone,service,message} = await request.json()
     await db.insert(bookings).values({ name, email, phone,service,message });
  return NextResponse.json(
    { message: "API skeleton working", received: {name,email,phone,service,message} },
    { status: 200 }
  )
}
