import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    console.log("Login Request:", body);
    return NextResponse.json({ message: "Login successful" });
}
