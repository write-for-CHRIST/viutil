# vikit - Vietnamese Kit

Vikit is a collection of funtions that will solve common problem in Vietnamese

## How to use

Install the package:

```
npm install --save vikit
```

## API

### diacritics(str)

Remove Vietnamese diacritics from the string and make a dashed string without diacritics.

```javascript
const {diacritics} = require('vikit')

const str = 'Vì Đức Chúa Trời yêu thương thế gian'
const result = diacritics(str)
console.log(resut) // 'vi-duc-chua-troi-yeu-thuong-the-gian'
```
