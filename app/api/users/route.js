import connectDB from "@/lib/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Connecting to database in /api/users...");
    await connectDB();
    console.log("Connected to DB, now fetching users...");

    const users = await User.find({}, 'username email createdAt'); // ✔️ use correct fields

    console.log("Fetched Users:", users);

    // Format users for frontend (map username to name, set default role)
    const formattedUsers = users.map((user) => ({
      id: user._id,
      name: user.username,               // 👈 converting username -> name
      email: user.email,
      role: user.role || "User",         // 👈 default role if missing
      createdAt: user.createdAt,
    }));

    return NextResponse.json(formattedUsers); // ✅ send clean data
  } catch (error) {
    console.error("Error in /api/users:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

















// import connectDB from "@/lib/connectDB";
// import User from "@/models/User";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     console.log("Connecting to database in /api/users...");
//     await connectDB();
//     console.log("Connected to DB, now fetching users...");

//     const users = await User.find({}, 'name email role createdAt'); // ✅ only select needed fields
//     console.log("Fetched Users:", users); // ✅ Yeh line add karo

//     return NextResponse.json(users); // return actual user data
//   } catch (error) {
//     console.error("Error in /api/users:", error);

//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }













// import connectDB from "@/lib/connectDB";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     console.log("Connecting to database in /api/users..."); // ✅ Debug Log
//     await connectDB();
//     console.log("Connected to DB, now fetching users..."); // ✅ Debug Log

//     // Yahan tumhara model import karo
//     // const users = await User.find(); // example
//     // return NextResponse.json(users);
//     // Example one-time script
//     await User.updateMany({ role: { $exists: false } }, { $set: { role: 'User' } });

//     return NextResponse.json({ message: "Users fetched successfully" }); // ✅ Debug
//   } catch (error) {
//     console.error("Error in /api/users:", error); // ❌ Error Log
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }














// import connectDB from "@/lib/mongodb";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     await connectDB();
//     return NextResponse.json({ message: "Database Connected Successfully!" });
//   } catch (error) {
//     return NextResponse.json({ error: "Database Connection Failed" }, { status: 500 });
//   }
// }





















// import connToDB from '@/lib/mongodb';
// import User from '@/models/User';
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     // Connect to DB
//     await connToDB();

//     // Parse JSON from request
//     const { name, email } = await request.json();

//     // Validation check
//     if (!name || !email) {
//       return NextResponse.json({ error: "Name and Email are required" }, { status: 400 });
//     }

//     // Check if email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return NextResponse.json({ error: "Email already exists" }, { status: 409 });
//     }

//     // Create & Save User
//     const newUser = new User({ name, email });
//     await newUser.save();

//     // Return Response
//     return NextResponse.json(
//       { message: "User created successfully", user: newUser },
//       { status: 201 }
//     );

//   } catch (err) {
//     console.error("Error saving user:", err);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }



















// import connToDB from '@/lib/mongodb'
// import User from '@/models/User'
// import { NextResponse } from 'next/server'



// export async function POST(request) {
//   try {
//     // Connect to the database
//     await connToDB();

//     // Get data from request body
//     const { name, email } = await request.json();

//     // Create a new user
//     const newUser = new User({ name, email });

//     // Save user to the database
//     await newUser.save();

//     // Return the response
//     return NextResponse.json(newUser, { status: 201 });

//   } catch (err) {
//     console.error("Error saving user:", err);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
