let lastId : number = 0;

function generateComponentId(prefix : string = 'vz-component-id-') : string {
   return `${prefix}${lastId++}`;
}

export {
   generateComponentId
}
