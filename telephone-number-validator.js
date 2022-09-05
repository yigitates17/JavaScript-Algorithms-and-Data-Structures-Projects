function telephoneCheck(str) {

  let regex = /^(1\s?)?(\((\d{3}\))|(\d{3}))(\s|-)?(\d{3})(\s|-)?(\d{4})$/

  console.log(regex.test(str))

  return regex.test(str)
 
}

telephoneCheck("(275)76227382");
telephoneCheck("27576227382");
