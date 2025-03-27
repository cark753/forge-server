const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPassword = 'xcvasdfqwer';
const myPassword1 = myPassword + 'y';

bcrypt.genSalt(saltRounds, function (err, salt) {
  console.log('Salt', salt);
  bcrypt.hash(myPassword, salt, function (err, hash) {
    console.log('Passwrod Hash', hash);
    //사용자 등록시 hash값을 DB에 저장

    bcrypt.compare(myPassword, hash, function (err, result) {
      console.log('로그인 결과: ', result);
      bcrypt.compare(myPassword1, hash, function (err, result) {
        console.log('로그인 결과: ', result);
      });
    });
  });
});
