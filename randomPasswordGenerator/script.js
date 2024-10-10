function generatePassword(
    length,
    includelowercase,
    includeuppercase,
    includenumbers,
    includesymbols
  ) {
    if(!includelowercase && !includeuppercase && !includenumbers && !includesymbols){
        alert("please include a type");
    }
    let password = "";
    let charSet = "";
    if (includelowercase) {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeuppercase) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includenumbers) {
      charSet += "0123456789";
    }
    if (includesymbols) {
      charSet += "!@#$%^&*()_+{}|:<>?";
    }
    for (let i = 0; i < length; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return password;
  }
  
  const passwordLen = 12;
  const numbers = document.getElementById("numbers");
  const uppercase = document.getElementById("uppercase");
  const lowercase = document.getElementById("lowercase");
  const specialcharacteres = document.getElementById("specialcharacteres");
  const display = document.getElementById("password");
  const button = document.getElementById("submit");
  
  button.onclick = function () {
    const includelowercase = lowercase.checked;
    const includeuppercase = uppercase.checked;
    const includenumbers = numbers.checked;
    const includesymbols = specialcharacteres.checked;
  
    const password = generatePassword(
      passwordLen,
      includelowercase,
      includeuppercase,
      includenumbers,
      includesymbols
    );
  
display.value = password;
    console.log(password);
  };
