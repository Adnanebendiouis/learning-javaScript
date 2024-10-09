function generatePassword(length,includelowercase,includeuppercase,includenumbers,includesymbols){
    let password = '';
    let charSet = '';
    if(includelowercase){
        charSet += 'abcdefghijklmnopqrstuvwxyz';
    }
    if(includeuppercase){
        charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(includenumbers){
        charSet += '0123456789';
    }
    if(includesymbols){
        charSet += '!@#$%^&*()_+{}|:<>?';
    }
    for(let i = 0; i < length; i++){
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return password;
}
const passwordLen = 12;
const includelowercase = false;
const includeuppercase = false;
const includenumbers = false;
const includesymbols = false;
const password = generatePassword(passwordLen,includelowercase,includeuppercase,includenumbers,includesymbols);
console.log(password);