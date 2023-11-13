export const DOM = {
   find(scope: HTMLElement | Document = document, selector: string) {
      return scope.querySelectorAll(selector);
   }
}