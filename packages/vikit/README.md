# vikit - Vietnamese Kit

Vikit is a collection of funtions that will solve common problem in Vietnamese

## How to use

Install the package:

```
npm install --save vikit
```

## API

### noDiacriticDash(str)

Remove Vietnamese diacritics from the string and make a dashed string without diacritics.

```javascript
const {noDiacriticDash} = require('vikit')

const str = 'Vì Đức Chúa Trời yêu thương thế gian'
const result = noDiacriticDas(str)
console.log(resut) // 'vi-duc-chua-troi-yeu-thuong-the-gian'
```

### changePhonePrefix(phoneNumber)

Change phone number with the new prefix.
Chuyển đổi đầu số các nhà mạng từ 11 số sang 10 số.

```javascript
const {changePhonePrefix} = require('vikit')

const oldPhone = '01222010203'
const newPhone = changePhonePrefix(oldPhone)
console.log(newPhone) // 0772010203
```