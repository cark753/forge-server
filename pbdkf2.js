const forge = require('node-forge')
let salt
let numlterations = 1000
let password = 'asfhhsagasfhja'
let keysize = 32

salt = forge.random.getBytesSync(16)
let devidedKey = forge.pkcs5.pbdkf2(password, salt, numlterations, keysize);
console.log('Password: ', password)
console.log('salt ', forge.util.bytesToHex(salt))
console.log('lterations ', numlterations)
console.log('Devided Key ', forge.util.bytesToHex(DevideKey))

devideKey = forge.pkcs5.pbdkf2(password, salt, numleterations, keysize)
console.log('Devided Key(수신자): ', forge.util.bytesToHex(devideKey))

forge.pkcs5.pbdkf2(
    password,
    salt,
    numlterations,
    keysize,
    Function (err, devidedKey){
        if (err) console.log(err)
            else 
                console.log ('Devided Key 1 (async): ', forge.util.bytesToHex
            (devideKey))
    }
)