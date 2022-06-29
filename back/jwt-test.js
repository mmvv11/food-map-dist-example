const jwt = require("jsonwebtoken");

const secret = "this is my secret";

const token = jwt.sign(
  { userIdx: 100, nickname: "김철수" }, // payload 정의
  secret // 서버 비밀키
);

console.log(token);

const verifiedToken = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.A7LKg7IiYIiwiaWF0IjoxNjU2MzA1ODY2fQ.grQvBg7aey43dfByN6UsfUKY4Jy1V0j2m9wt2S9d5hk",
  secret
);

console.log(verifiedToken);
