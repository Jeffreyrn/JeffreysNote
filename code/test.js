function fn(){
  console.log(vm.a)
}
const vm={
  a: 'haha',
  b: fn
}
vm.b()