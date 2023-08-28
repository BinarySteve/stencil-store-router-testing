  import {Component, h, Listen, VNode} from "@stencil/core";
  import {routeConfig} from "../../router/routeConfig";
  import {routerStore} from "../../router/routerStore";


  @Component({
    tag:"app-router"
  })
  export class AppRouter {
    routeParams = {};

    @Listen('popstate', {target:"window"})
    connectedCallback(){
      this.handleRouteChange();
    }

    handleRouteChange = () =>{
      for(const route of routeConfig){
        if(route.path.includes(window.location.pathname) && route.redirect){
          routerStore.navigate(route.redirect);
          break;
        }else{
          routerStore.navigate(window.location.pathname);
        }
      }
    };

    findMatchingRoute(){
      this.routeParams = {};
      let matchFound: any;

      for(const route of routeConfig){
          for(const path of route.path){
            matchFound = this.matchRoutePath(path, route);
            if(matchFound){
              break;
            }
          }
        if(matchFound){
          break;
        }
      }
      return matchFound;
    }

    matchRoutePath(path, route){
      const routePathSegments = path.split("/");
      const currentRouteSegments = routerStore.state.currentUrl.split("/");
      if(routePathSegments.length === currentRouteSegments.length){
        let isMatch = true;

        for(let i = 0; i < routePathSegments.length; i++){
          const routeSegment = routePathSegments[i];
          const currentSegment = currentRouteSegments[i];

          if(routeSegment.startsWith(":")){
            const paramName = routeSegment.slice(1);
            this.routeParams[paramName] = currentSegment;
          }else if(routeSegment.toLowerCase() !== currentSegment.toLowerCase()){
            isMatch = false;
            break;
          }
        }
        if(isMatch){
          route.params = this.routeParams;
          return route;
        }
      }
      return null;
    }
    render(): VNode{
      const matchedRoute = this.findMatchingRoute();
      return matchedRoute ? h(matchedRoute.component, {params: this.routeParams}) : h("div");
    }
  }
