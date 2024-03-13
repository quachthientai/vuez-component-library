function isIncluded<T>(arr: Array<T>, val: T) : boolean {
   return arr.includes(val)
}

const Helpers = {
   toPascalCase(str: string, delimiter: string = null): string {
      return str
         .split(delimiter)
         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
         .join('');
   },
   isIncluded<T>(arr: Array<T>, val: T) : boolean {
      if(typeof val === 'string') {
         return arr.map(item => item.toString().toLowerCase())
            .includes(val.toLowerCase());
      }
      return arr.includes(val);
   },
   objectFilter<T>(obj: Record<string, T>, predicate: (key: string, value: T) => boolean) : Record<string, T> {
      const result: Record<string, T> = {};
      for(const key in obj) {
         if(predicate(key, obj[key])) {
            result[key] = obj[key];
         }
      }
      return result;
   },
   filterInputAttrs<T>(obj: Record<string, T>, filterKeys: Array<string | RegExp>) : Array<Record<string, T>> {
      const rootAttrs: Record<string, T> = Object.create(null);
      const inputAttrs: Record<string, T> = Object.create(null);
      for(const key in obj) {
         if(
            filterKeys.some((item) => 
               item instanceof RegExp ? item.test(key) : item === key
            )
         ) {
            rootAttrs[key] = obj[key];
         } else {
            inputAttrs[key] = obj[key];
         }
      }
      
      return [rootAttrs, inputAttrs];
   }
}

export {
   isIncluded,
   Helpers
}