function palindrome(str) {

  let regex = /[^A-Za-z0-9]/
  let str_new = str.toLowerCase().split(regex)
  console.log(str_new)
  str_new = sum_array(str_new)
  
  function sum_array(arr) {
    let result = ""
    for(let elem in arr){
      result += arr[elem]
    } 
    return result
  }


  for(let left_index=0, right_index=str_new.length-1; right_index > left_index; left_index++, right_index--){
    console.log(left_index, right_index)
    if(str_new[left_index] != str_new[right_index]){
    console.log("false!")
    return false
    }
  }

  return true;
}

palindrome("0_0 (: /-\ :) 0-0")
