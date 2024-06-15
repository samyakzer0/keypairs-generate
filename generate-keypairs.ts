import { Keypair } from "@solana/web3.js";
import dotenv from "dotenv";
import fs from "fs";

// Load environment variables from the uploaded keys.env file
const envFilePath = 'C:/Users/SAMYAKK/Desktop/RustSolana/.gitignore/keys.env';
if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
} else {
  console.error("Environment file not found");
  process.exit(1);
}

// Ensure the SECRET_KEY environment variable is loaded
const secretKeyString = process.env.SECRET_KEY;

if (!secretKeyString) {
  console.error("SECRET_KEY environment variable not set");
  process.exit(1);
}

// Convert the secret key string to a Uint8Array
const secretKey = Uint8Array.from(JSON.parse(secretKeyString));

// Generate the keypair using the secret key
const keypair = Keypair.fromSecretKey(secretKey);

console.log("Generated Keypair");
console.log(`PublicKey => ${keypair.publicKey.toBase58()}`);
console.log(`Secret Key =>`, keypair.secretKey);
