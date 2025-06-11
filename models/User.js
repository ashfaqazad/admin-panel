import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // ✅ make it required
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'User'],
    default: 'User',
  },
}, { timestamps: true }); // adds createdAt and updatedAt

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;













// // import mongoose from "mongoose";

// // const UserSchema = new mongoose.Schema(
// //   {
// //     username: { type: String, required: true },
// //     email: { type: String, required: true, unique: true },
// //     password: { type: String, required: true },
// //   },
// //   { timestamps: true }
// // );

// // export default mongoose.models.User || mongoose.model("User", UserSchema);




// // models/User.js
// import mongoose from 'mongoose';

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: {
//     type: String,
//     enum: ['Admin', 'User'], // optional: limit roles
//     default: 'User',
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.models.User || mongoose.model('User', UserSchema);












// // import mongoose from "mongoose";

// // const userSchema = new mongoose.Schema({
// //     name: { type: String, required: true },
// //     email: { type: String, required: true, unique: true },
// // }, { timestamps: true });

// // const User = mongoose.models.User || mongoose.model("User", userSchema);

// // export default User;










// // import mongoose from "mongoose";

// // const userSchema = new mongoose.Schema({
// //     name: {type: string},
// //     email: {type: string, required: true},
// // })

// // const User = mongoose.models.User || mongoose.model("User", userSchema)

// // export default User