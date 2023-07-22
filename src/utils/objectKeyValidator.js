export const keyValidator = (keyList, value, type) => {
  if (type === 'array') {
    for (const i of value) {
      for (const key in i) {
        if (keyList.indexOf(key) > -1) {
          continue
        }
        console.warn(`[${key}] is not valid key in itemList!`)
      }
    }
    return true
  }

  if (type === 'object') {
    for (const key in value) {
      if (list.indexOf(key) > -1) {
        continue
      }
      console.warn(`[${key}] is not valid key in object!`)
    }
    return true
  }
}
