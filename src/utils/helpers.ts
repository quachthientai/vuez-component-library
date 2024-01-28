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
         return arr.includes(val.toLowerCase() as any);
      }
      return arr.includes(val);
   }
}

export {
   isIncluded,
   Helpers
}