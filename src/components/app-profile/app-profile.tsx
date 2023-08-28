import { Component, Prop, h } from '@stencil/core';
import {routerStore} from "../../router/routerStore";

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {
  @Prop() params: { name: string; } ;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.params?.name) {
      return (
        <div class="app-profile">
          <p>Hello! My name is {this.normalize(this.params?.name)}. My name was passed in through a route param!</p>
          <shared-button onClickFn={()=> routerStore.navigate("/")} label={"Go Back"}/>
        </div>
      );
    }
  }
}
