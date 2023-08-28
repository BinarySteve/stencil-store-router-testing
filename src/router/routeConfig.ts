export const routeConfig = [
  {path:["/","/home"], component:"app-home"},
  {path:["/profile/:name","/profile/home/:name"], component:"app-profile"},
  {path:["/name"], component:"app-profile", redirect:"/profile/rerouted"},
]
