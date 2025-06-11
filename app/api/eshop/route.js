import connectToDatabase from "@/lib/connectDB";
import Product from "@/models/Product"; // ✅ Ye sahi model hai
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();

    const products = await Product.find({}); // ✅ Use the correct model here
    console.log("🟢 Found Products:", products);

    const transformed = products.map((item) => ({
      _id: item._id.toString(),
      title: item.title,
      image: item.image,
      description: item.description,
      price: item.price,
    }));

    return NextResponse.json({ products: transformed }, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching eShop data:", error);
    return NextResponse.json({ error: "Failed to fetch eShop data" }, { status: 500 });
  }
}















// import connectToDatabase from "@/lib/connectDB";
// import Product from "@/models/Product";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     await connectToDatabase();

//     const products = await eShop.find({});
//     console.log("🟢 Found Products:", products); // 👈 Add this line

//     const transformed = products.map((item) => ({
//       _id: item._id.toString(),
//       title: item.title,
//       image: item.image,
//       description: item.description,
//       price: item.price,
//     }));

//     return NextResponse.json({ products: transformed }, { status: 200 });
//   } catch (error) {
//     console.error("❌ Error fetching eShop data:", error);
//     return NextResponse.json({ error: "Failed to fetch eShop data" }, { status: 500 });
//   }
// }



















// // app/api/eshop/route.js
// import connectToDatabase from "@/lib/connectDB";
// import eShop from "@/models/Product";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   try {
//     await connectToDatabase();

//     const products = await eShop.find({});

//     const transformedData = products.map((item) => ({
//       _id: item._id.toString(),
//       title: item.title,
//       image: item.image,
//       description: item.description,
//       price: item.price,
//     }));

//     const res = NextResponse.json({ eShop: transformedData }, { status: 200 });

//     // ✅ CORS Headers
//     res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000"); // Admin Panel origin
//     res.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
//     res.headers.set("Access-Control-Allow-Headers", "Content-Type");

//     return res;

//   } catch (error) {
//     console.error("Error fetching eShop data:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch eShop data" },
//       { status: 500 }
//     );
//   }
// }

// // ✅ Optional: Handle OPTIONS preflight request
// export function OPTIONS() {
//   const res = new NextResponse(null, { status: 204 });
//   res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
//   res.headers.set("Access-Control-Allow-Headers", "Content-Type");
//   return res;
// }



















// // import connectToDatabase from "@/lib/connectDB";
// import connectToDatabase from "@/lib/connectDB";
// import eShop from "@/models/Product";
// import { NextResponse } from "next/server";


// export async function GET() {
//   try {
//     await connectToDatabase();

//     const products = await eShop.find({});

//     const transformedData = products.map((item) => ({
//       _id: item._id.toString(),
//       title: item.title,
//       image: item.image,
//       description: item.description,
//       price: item.price,
//     }));

//     return NextResponse.json({ eshop: transformedData }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching eShop data:", error);
//     return NextResponse.json({ error: "Failed to fetch eShop data" }, { status: 500 });
//   }
// }











// // app/api/eshop/route.js
// import { connectToDatabase } from "@/lib/connectDB";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const client = await connectToDatabase();
//     const db = client.db(); // default DB from URI
//     const eShopCollection = db.collection("eShop");

//     const data = await eShopCollection.find({}).toArray();

//     const transformedData = data.map((item) => ({
//       _id: item._id.toString(),
//       title: item.title,
//       image: item.image,
//       description: item.description, // ✅ Description added
//       price: Number(item.price?.$numberInt || item.price || 0),
//     }));

//     return NextResponse.json({ eShop: transformedData }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching eShop data:", error);
//     return NextResponse.json({ error: "Failed to fetch eShop data" }, { status: 500 });
//   }
// }
