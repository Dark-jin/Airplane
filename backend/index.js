// node_modules 에 있는 express 관련 파일을 가져온다.
require("dotenv").config();
var express = require("express");
const route = require("./route");
const cors = require("cors");

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express();

app.use(cors());
app.use(route);

// 8000 포트로 서버 오픈
app.listen(8000, function () {
  console.log("start! express server on port 8000");
});

// 이제 터미널에 node app.js 를 입력해보자.
