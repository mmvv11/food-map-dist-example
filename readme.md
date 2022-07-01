# 맛집지도 배포 코드입니다.

코드 구조

- /back

  - Back-End 로직이 정의되어 있습니다.
  - 깃허브를 통해 이 프로젝트를 다운로드 받으신다면
    ```
    // package.json 에 정의되어 있는 의존성 라이브러리를 설치합니다.
    npm i
    ```
    - /config/secret.js 파일은 직접 정의해야 합니다.
      ```javascript
      module.exports = {
        jwtsecret: "jwt 암호키",
        host: "DB 서버 ip 또는 url",
        user: "DB 외부접속을 허용한 계정",
        port: "3306",
        password: "DB 계정 비밀번호",
        database: "접속할 스키마명",
      };
      ```
  - /config/express.js 에서는 express 서버에서 돌아갈 미들웨어와 라우터를 연결합니다.
  - /src 내부에는 Rounter, Controller, Dao가 정의되어 있습니다.

<br/><br/>

- /front

  - Front-end 파일이 저장되어 있습니다.
  - /css
    - common.css 모든 페이지에 적용될 수 있는 공통적인 css를 정의합니다.
    - map.css 지도와 관련된 css를 정의합니다.
    - sign.css 로그인. 회원가입 페이지와 관련된 css를 정의합니다.
      <br/><br/>
  - /js

    - url.js 서버에 API를 요청할 때 사용할 공통적인 url을 정의합니다.
    - header.js 회원/비회원 헤더를 서로 다르게 설정하기 위한 로직을 정의합니다.
    - map.js 지도와 관련된 로직을 정의합니다.
    - signin.js 로그인 API 연동 또는 관련 로직을 정의합니다.
    - signup.js 회원가입 API 연동 또는 관련 로직을 정의합니다.
      <br/><br/>

  - html

    - index.html 메인 페이지입니다.
    - signin.html 로그인 페이지입니다.
    - signup.html 회원가입 페이지입니다.

    ```
    ** CSS, JS 연결을 하는 link, script 태그에 상대경로를 잘 입력했는지 확인해야합니다.**
    ```
