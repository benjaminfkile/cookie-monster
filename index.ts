process.on("uncaughtException", function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

import dotenv from "dotenv"
import knex from "knex"

dotenv.config()

const app = require("./src/app")

const PORT = process.env.PORT

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  }
})

app.set("db", db)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})