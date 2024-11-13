console.log("This file is running!");

let defaultEnv = {
    PORT: 5050,
    DATABASE_URI: "asdasd:asdasd",
    JWT_SECURITY_KEY: "asdasdas",
    SECERET_KEY: "apple",
    SECURE_API_KEY: "sdfas765haskdhfahdfkahdsf" 
};

let  contentToWrite = "";
//What should it look like
// PORT=5050
//DATABASE_URI: "asdasd:asdasd",
//JWT_SECURITY_KEY: "asdasdas",
//SECERET_KEY: "apple",
//SECURE_API_KEY: "sdfas765haskdhfahdfkahdsf"

Object.keys(defaultEnv).forEach(
    envKey => {
        // Add a line to the contentToWrite variable with the key name and value
        contentToWrite += `${envKey}=${defaultEnv[envKey]}\n`;
    }
);

console.log(contentToWrite);

// All the filelhandling operations will be performed using fs
const fs = require("node:fs");

// Synchronous way
//fs.writeFileSync(".env", contentToWrite);


// Asynchronpis way
// fs.writeFile(filepath, fileContents, callback); Error message function
fs.writeFile(".env", contentToWrite, (error) => {
    if (error) {
        console.log("Error encountered: ", error);
    }
    else {
        console.log("File written successfully!");
    }
})


console.log("File has been written.");
