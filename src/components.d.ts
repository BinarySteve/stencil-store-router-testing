/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "params": { name: string; };
    }
    interface AppRoot {
    }
    interface AppRouter {
    }
    interface SharedButton {
        "label": string;
        "onClickFn": () => void;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppRouterElement extends Components.AppRouter, HTMLStencilElement {
    }
    var HTMLAppRouterElement: {
        prototype: HTMLAppRouterElement;
        new (): HTMLAppRouterElement;
    };
    interface HTMLSharedButtonElement extends Components.SharedButton, HTMLStencilElement {
    }
    var HTMLSharedButtonElement: {
        prototype: HTMLSharedButtonElement;
        new (): HTMLSharedButtonElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-router": HTMLAppRouterElement;
        "shared-button": HTMLSharedButtonElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "params"?: { name: string; };
    }
    interface AppRoot {
    }
    interface AppRouter {
    }
    interface SharedButton {
        "label"?: string;
        "onClickFn"?: () => void;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-router": AppRouter;
        "shared-button": SharedButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-router": LocalJSX.AppRouter & JSXBase.HTMLAttributes<HTMLAppRouterElement>;
            "shared-button": LocalJSX.SharedButton & JSXBase.HTMLAttributes<HTMLSharedButtonElement>;
        }
    }
}
