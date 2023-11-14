export const DOM = {
   find(scope: HTMLElement | Document = document, selector: string) : NodeListOf<HTMLElement> {
      return scope.querySelectorAll(selector);
   }
}