import { NextRequest, NextResponse } from "next/server"

 
 export async function POST(req: NextRequest) {
  const body = await req.json()
console.log("BODY RECEIVED:", body)

  if(!body.fullName || !body.email || !body.phone || !body.service || !body.message) {
    return NextResponse.json (
    { error: "All fields are required" },
      { status: 400 }
    )
  }
  
  return NextResponse.json({
     success: true }, 
     { status: 200  })
  }