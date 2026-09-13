import { db } from "@/db"; 
import { bookings} from "@/db/schema";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    console.log("Booking route hit");
  try {
    const data = await request.json();

    const result = await db.insert(bookings).values({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      serviceNeeded: data.serviceNeeded,
      message: data.message,
    });
           console.log("Inserted booking:", result);   // ✔ CORRECT SPOT

    return NextResponse.json({ success: true, result });
  } catch (error) {
        console.log("Booking route error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
