export function convertUnit(value: number | string, unit?: string) : string | undefined
export function convertUnit(value: number | string, unit = 'px') : string | undefined {
   if(value === undefined) return undefined
   
   if (typeof value === 'string') return `${Number(value)}${unit}`
   return `${value}${unit}`
}