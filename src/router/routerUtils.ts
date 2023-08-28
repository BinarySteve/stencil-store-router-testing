export function navigateTo(url: string) {
  history.pushState(null, "", url);
  window.dispatchEvent(new Event("popstate"));
}
