function checkCashRegister(price, cash, cid) {

  let change = cash-price

  const list = {
    0.01:"PENNY", 
    0.05:"NICKEL", 
    0.1:"DIME", 
    0.25:"QUARTER", 
    1:"ONE", 
    5:"FIVE", 
    10:"TEN", 
    20:"TWENTY", 
    100:"HUNDRED"
    }

  let test = Object.keys(list)
  test.sort(function(a, b){return a - b}).reverse()

  let register = {}
  cid.forEach(item => {
    register[item[0]] = item[1]
    }
  )

  let edit_register = register;

  let temp_list = []
  test.forEach(key => {
    
    let back = 0
    while(change >= Number(key) && edit_register[list[key]] > 0){
    change -= Number(key)
    change = change.toFixed(2)
    back += Number(key) 
    back = Number(back).toFixed(2)
    back = Number(back)
    edit_register[list[key]] -= Number(key)
    edit_register[list[key]] = edit_register[list[key]].toFixed(2)
    }

    if(back!=0)
    temp_list.push([list[key], back])
  }
  )

  let status
  let arr
  let see = Object.values(register)
  
  if(change == 0){
    status = "OPEN"
    arr = temp_list
    
    if(see.every((element) => element == 0)){
    status = "CLOSED"
    arr = cid
  }
    
  }
  else status = "INSUFFICIENT_FUNDS"
  
  if(status == "INSUFFICIENT_FUNDS")
    arr = []
  
  console.log(temp_list)

  let result = {"status": status, "change": arr}
  console.log(result)

  return result
  
}


checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
