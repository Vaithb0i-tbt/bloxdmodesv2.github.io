const fs = require("fs");
const crypto = require("crypto");

const key = crypto.randomBytes(32); // Save this somewhere secure!
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

const input = fs.createReadStream("original.js");
const output = fs.createWriteStream("../js/script.enc");

input.pipe(cipher).pipe(output);

output.on("finish", () => {
  console.log("Encryption done.");
  console.log("KEY (base64):", key.toString("base64"));
  console.log("IV (base64):", iv.toString("base64"));
});
