export const DOM = {
   find(scope: HTMLElement | Document = document, selector: string) : NodeListOf<HTMLElement> {
      return scope.querySelectorAll(selector);
   },

   findSingle(scope: HTMLElement | Document = document, selector: string) : HTMLElement | null {
      return scope.querySelector(selector);
   },

   on(props: {
      scope: HTMLElement | Document | Window,
      event: string,
      callback: (e: Event) => void 
   }) : void {
      const { scope, event, callback } = props;

      if(typeof scope === 'undefined') {
         throw new Error('Scope is undefined')
      }
      debugger;
      (scope as any).addEventListener('on' + event, callback);
   }
   //    scope: HTMLElement | Document = document, 
   //    event: string, selector: string, callback: (e: Event) => void) {

   // }
}