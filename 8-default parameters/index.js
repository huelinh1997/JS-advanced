// default parameters

//tempalte string
// function greeting(name) {
//   if(name === undefined) {
//     name = 'friend';
//   }
//   return `Hi, ${name}!`;
// }
// greeting();

// su dung default parameters
function greeting(name = 'friend') {
  return `Hi, ${name}!`;
}
//greeting();

function greeting2(name = 'friend', language = 'en') {
  if(language === 'en') {
    return `Hi, ${name}!`;
  }
  if(language === 'ja') {
    return `Konnichiwa, ${name}!`;
  }
  return `Xin chào ${name}`;
}
greeting2();