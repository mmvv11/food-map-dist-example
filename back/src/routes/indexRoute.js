module.exports = function (app) {
  const index = require("../controllers/indexController");
  const jwtMiddleware = require("../../config/jwtMiddleware");

  // 라우터 정의
  // app.HTTP메서드(uri, 컨트롤러 콜백함수)
  // app.get("/dummy", index.example);

  // // 학생 테이블 조회
  // app.get("/students/:studentIdx", index.readStudents);
  // // 학생 생성
  // app.post("/students", index.createStudent);
  // // 학생 업데이트
  // app.patch("/students/:studentIdx", index.updateStudent);
  // // 학생 삭제
  // app.delete("/students/:studentIdx", index.deleteStudent);

  // 식당 목록 조회
  app.get("/restaurants", index.readRestaurants);

  // 회원가입
  app.post("/sign-up", index.createUsers);

  // 로그인
  app.post("/sign-in", index.createJwt);

  // 로그인 유지, 토큰 검증
  app.get("/jwt", jwtMiddleware, index.readJwt);
};
