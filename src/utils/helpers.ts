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
   }
}

export {
   isIncluded,
   Helpers
}