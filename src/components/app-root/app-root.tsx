import { Component, h } from '@stencil/core';
import state from "../../../store";
import {routerStore} from "../../router/routerStore";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>
        <p>Count: {state.counter}</p>
        <shared-button onClickFn={()=> state.counter++} label={"Increment"}/>
        <p>Current URL: {routerStore.state.currentUrl}</p>
        <main>
         <app-router/>
        </main>
      </div>
    );
  }
}
