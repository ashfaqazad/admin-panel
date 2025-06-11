import mongoose from 'mongoose';

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectToDatabase;




// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI in .env.local file");
// }

// let cached = global.mongoose || { conn: null, promise: null };

// async function connectDB() {
//   console.log("Connecting to MongoDB..."); // ✅ Debug Log
//   if (cached.conn) {
//     console.log("Using cached connection"); // ✅ Debug Log
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {}).then((mongoose) => {
//       console.log("MongoDB Connected Successfully!"); // ✅ Debug Log
//       return mongoose;
//     }).catch((err) => {
//       console.error("MongoDB Connection Error:", err); // ❌ Error Log
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectDB;












// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI in .env.local file");
// }

// let cached = global.mongoose || { conn: null, promise: null };

// async function connectDB() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {}).then((mongoose) => mongoose);
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectDB;






// import mongoose from "mongoose";

// const MONGO_URI = process.env.MONGO_URI;

// if (!MONGO_URI) {
//     throw new Error("Please define the MONGO_URI environment variable in .env.local");
// }

// let isConnected = false; // To prevent multiple connections

// const connToDB = async () => {
//     if (isConnected) {
//         console.log("Already connected to MongoDB");
//         return;
//     }
//     try {
//         await mongoose.connect(MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         isConnected = true;
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Connection failed:", error.message);
//         throw new Error("Database connection error");
//     }
// };

// export default connToDB;






// import mongoose from "mongoose";

// // const mongoURI = process.env.DATABASE;

// const connToDB = async() =>{
//     try {
//         await mongoose.connect(process.env.mongo_URI)
//         console.log("Connected to Compass");
        
//     } catch (error) {
//         console.log("Connection failed");
        
        
//     }
// }
// export default connToDB;