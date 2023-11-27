export const DOM = {
   find(scope: HTMLElement | Document = document, selector: string) : NodeListOf<HTMLElement> {
      return scope.querySelectorAll(selector);
   },

   findSingle(scope: HTMLElement | Document = document, selector: string) : HTMLElement | null {
      return scope.querySelector(selector);
   }
}