import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel"; // ✅ Make sure casing matches file name exactly
import { connect } from "@/dbConfig/dbconifg";

connect();

export async function GET(request: NextRequest) {
  try {
    // 1. Extract userId from token
    const userId = await getDataFromToken(request);

    // 2. Fetch user (excluding password)
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // 3. Return user data
    return NextResponse.json({
      message: "User found",
      data: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Unauthorized" },
      { status: 401 }
    );
  }
}
