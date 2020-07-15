const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });

  passport.deserializeUser((user, done) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    done(null, user); // 여기의 user가 req.user가 됨
  });

  passport.use(new LocalStrategy({ // local 전략을 세움
    usernameField: 'id',
    passwordField: 'pw',
    session: true, // 세션에 저장 여부
    passReqToCallback: false,
  }, (id, password, done) => {
      // 로그인 처리 !
      // my sql 연결 하고
      // row data 뽑아내서 검사하고
      // 결과값은 어떻게?
      console.log("in passport");
      return done(null,user);
  }));
};