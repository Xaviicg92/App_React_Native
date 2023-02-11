const mongoose = require("mongoose");

const password = "bDBWXiYxK3Awdrnb";
const dbName = "cities";

const uri = `mongodb+srv://Xavicg:${password}@cluster0.0flm0v9.mongodb.net/?retryWrites=true&w=majority`;

export const connect = () =>
  main()
    .then(() => console.log("conectado"))
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
