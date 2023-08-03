import { createStore } from "vuex";

export default createStore({
  state: {
    items: [
      [{ selected: false }, { selected: false }, { selected: false }],
      [{ selected: false }],
      [{ selected: false }, { selected: false }, { selected: false }],
    ],
  },
  mutations: {
    SAVE_ITEMS(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    add(context, index) {
      const items = context.state.items;
      items[index].push({ selected: false });
      context.commit("SAVE_ITEMS", items);
    },
    selectedRow(context, value) {
      const items = context.state.items;
      items[value.index].forEach((val) => {
        val.selected = value.selected;
      });
      context.commit("SAVE_ITEMS", items);
    },
  },
});
