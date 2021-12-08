const actions = {
  asyncAddStoreCount(store, payload) {
    console.log(payload)
    store.commit("addCount", payload)
  },
}
export { actions }
