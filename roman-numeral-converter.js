function convertToRoman(num) {
  
  const convert = {
    1000:"M",
    900: "CM",
    500: "D",
    400: "CD",
    100:"C",
    90:"XC",
    50:"L",
    40:"XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  }

  let list = Object.keys(convert).reverse()
  let result = ""

  list.forEach(key => {
     while(num >= key){
       console.log(num, key)
       num -= key
       result += convert[key]
     }
  })

  console.log(result)

 return result;
}

convertToRoman(366);
