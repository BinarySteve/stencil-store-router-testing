import {createStore} from "@stencil/store";

interface RouterState {
  currentUrl: string;
}
const {state, onChange} = createStore<RouterState>({
  currentUrl: ""
})

export const routerStore = {
  state,
  onChange,
  navigate: (route: string) => {
    state.currentUrl = route;
    history.pushState({},"", route);
  }
};
