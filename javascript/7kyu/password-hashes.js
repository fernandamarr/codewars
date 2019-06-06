const crypto = require("crypto");

function passHash(str) {
const hash = crypto.createHash('md5')
                    .update(str)
                    .digest('hex');
                   
return hash;
// console.log(hash);
// console.log(str);
}