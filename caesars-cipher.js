function rot13(str) {

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const regex = /[A-Z]/
  let result = ""

  for(let i=0; i<str.length; i++){
    if(str[i].match(regex)){
      let index = alphabet.indexOf(str[i])
      index += 13
      if(index >= 26){
        index = index % 26
      }
      result += alphabet[index]
    }
    else {
      result += str[i]
    }
  }

  console.log(result)

  return result;
}

rot13("SERR PBQR PNZC");
