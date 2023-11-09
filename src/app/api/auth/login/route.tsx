import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const bcrypt = require('bcrypt');

export async function POST(request: NextRequest) {
    try {
        const loginRequest = await request.json()

        const hash = loginRequest.password;
        const user = await prisma.user.findUnique({
            where: {
                username: loginRequest.email,
            },
        })

        if (!user) {
            return NextResponse.json(
                { message: "Unauthorized" }, { status: 401 }
            )
        }

        const match = await bcrypt.compare(loginRequest.password, user.password);

        if (!match) {
            return NextResponse.json(
                { message: "Unauthorized" }, { status: 401 }
            )
        }

        return NextResponse.json(
            { message: "This works" }
        )

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message }, { status: 500 }
        )
    }
}