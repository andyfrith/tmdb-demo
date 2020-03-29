"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const env_1 = require("./env");
const logger_1 = require("./logger");
(async () => {
    logger_1.logger.info("tmdb-demo service starting", { ENV: env_1.ENV });
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/healthy", async (req, res) => {
        res.send({
            message: "tbdb-demo is ok"
        });
    });
    app.listen({ port: env_1.ENV.RUN_PORT }, () => {
        logger_1.logger.info(`tbdb-demo listening at :${env_1.ENV.RUN_PORT}...`);
    });
})();
/*
const cool = require("cool-ascii-faces");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/cool", (req, res) => res.send(cool()))
  .get("/cool2", (req, res) => res.send(cool()))

  .get("/times", (req, res) => res.send(showTimes()))
  .get("/db", async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM test_table");
      const results = { results: result ? result.rows : null };
      res.render("pages/db", results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

showTimes = () => {
  let result = "";
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + " ";
  }
  return result;
};
*/
