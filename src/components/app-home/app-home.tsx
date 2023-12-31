import {Component, h} from '@stencil/core';
// import {navigateTo} from "../../router/routerUtils";
import {routerStore} from "../../router/routerStore";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components
          using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <shared-button onClickFn={()=>routerStore.navigate("/profile/steve")} label={"Profile page"}/>

      </div>
    );
  }
}
