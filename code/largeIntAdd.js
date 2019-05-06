function largeIntAdd(a, b) {
  let arr1 = a.split('').reverse(), arr2 = b.split('').reverse()
  let arrSum = [], current = 0, carry = 0
  let maxlength = Math.max(a.length, b.length)
  for(let i=0;i<maxlength;i++){
    current = carry
    if(i<arr1.length){
      current += Number(arr1[i])
    }
    if (i< arr2.length) {
      current += Number(arr2[i])
    }
    arrSum.push(current%10)
    carry = Math.floor(current/10)
  }
  if(carry>0)
    arrSum.push(carry)
  return arrSum.reverse().join('')
}

function largeIntAdd(foo, bar){
  let fooArr=foo.split('').reverse(), barArr=bar.split('').reverse()
  let maxlength=Math.max(fooArr.length, barArr.length)
  let current=0, carry=0
  let sumArr=[]
  for(i=0;i<maxlength;i++){
    if (i< fooArr.length){
      current+=Number(fooArr[i])
    }
    if (i< barArr.length){
      current+=Number(barArr[i])
    }
    sumArr.push(current%10)
    carry=Math.floor(current/10)
  }
  if(carry>0){
    sumArr.push(carry)
  }
  return sumArr.reverse().join('')
}