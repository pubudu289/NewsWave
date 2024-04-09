import mongoose, { ConnectOptions, Mongoose } from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

const options = {};

let connectDbPromise: Promise<Mongoose>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalMongo = global as typeof globalThis & {
    isConnected?: Promise<Mongoose>;
  };

  if (!globalMongo.isConnected) {
    console.log("connecting to mongodb");
    globalMongo.isConnected = mongoose.connect(uri, options as ConnectOptions);
    console.log("connected!");
  }
  connectDbPromise = globalMongo.isConnected;
} else {
  // In production mode, it's best to not use a global variable.
  try {
    connectDbPromise = mongoose.connect(uri, options as ConnectOptions);
  } catch (err) {
    console.log(err);
  }
  connectDbPromise = mongoose.connect(uri, options as ConnectOptions);
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export { connectDbPromise };
