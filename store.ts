import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
  counter: 0,
  squaredClicks: 0,
  currentUrl: "",
  previousUrl: ""
});

onChange('currentUrl', (value) => {
  state.previousUrl = value;
});

export default state;
