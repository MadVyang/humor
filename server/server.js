import path from 'path';
import express from 'express';
import cors from 'cors';
import api_router from './router/api.js';
import cors_white_list from './cors_white_list.js';
import bodyParser from 'body-parser';
import * as db from './db/db.js';



const __dirname = path.resolve();
const app = express();
const server = app.listen(9000, function () {
  console.log("Express server has started on port 9000");
});

app.use(cors({
  origin: function (origin, callback) {
    callback(null, cors_white_list.indexOf(origin) !== -1);
  },
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

api_router(app, db);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

