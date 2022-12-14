import path from 'path';
import express from 'express';
import cors from 'cors';
import api_router from './router/api.js';
import cors_white_list from './cors_white_list.js';
import bodyParser from 'body-parser';
import multer from 'multer';
import * as db from './db/db.js';



const __dirname = path.resolve();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    let filename = Buffer.from(file.originalname, 'latin1').toString('utf8');
    let ext = filename.split('.').slice(-1)[0];
    filename = filename.substring(0, filename.length - ext.length - 1) + '_' + Date.now() + '.' + ext;
    cb(null, filename);
  }
});
const upload = multer({ storage: storage });
const app = express();

app.listen(9000, function () {
  console.log("Express server has started on port 9000");
});

app.set('trust proxy', true);
app.use(cors({
  origin: function (origin, callback) {
    callback(null, cors_white_list.indexOf(origin) !== -1);
  },
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log(new Date().toLocaleString(), "=>", req.ip, req.headers.referer);
  next();
});

api_router(app, db, upload);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

