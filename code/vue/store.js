const store= createStore({
  state:{
    count:0
  },
  mutations:{
    inc(state){
      state.count++
    }
  }
})
function createStore({
  state, mutations
}){
  return new Vue({
    data:{
      state
    }, 
    method:{
      commit(mutation){
        if(!mutations.hasOwnProperty(mutation)){
          throw new Error('unkown mutation')
        }
        mutations[mutation](state)
      }
    }
  })
}