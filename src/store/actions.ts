const actions = {
  asyncAddStoreCount(store, payload) {
    store.commit("addCount", payload)
  },
}
export { actions }
