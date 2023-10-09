import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const loginRequest = await request.json()
        if(loginRequest.email == "aaa" && loginRequest.password == "bbb") {
            return NextResponse.json(
                {message: "This works"}
            )
        } else {
            return NextResponse.json(
                {message: "Unauthorized"},
                {status: 401}
            )
        }

        
    } catch (error: any) {
        return NextResponse.json(
            {error: error.message},
            {status: 500}
        )
    }
}