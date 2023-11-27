import ShortUniqueId from 'short-unique-id';


function generateComponentId(prefix?: string) : string
function generateComponentId(prefix : string = 'vz-component-id-') : string {
   const uid = new ShortUniqueId();

   return `${prefix}-${uid.rnd()}`;
}

export {
   generateComponentId
}
