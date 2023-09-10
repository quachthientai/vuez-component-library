import { render, h, defineComponent, VNode } from 'vue'

export const createShadowComponent = (component, option, root, container) => {
  var vContainer = document.createElement('div')
  vContainer.classList.add(container)
  root.appendChild(vContainer)

  const vComponent = h(component, option)
  render(vComponent, vContainer)
}

export const createSubComponent = (component, option, container, styleClass, id) => {
  const vComponent = defineComponent({
    render() {
      return h(component, option)
    }
  })
  const v = h(vComponent, {id: id, class: styleClass});
  render(v, container);
}

export function createVNode(elementType: String, container: Element, styleObject: Object, id: String, className: String) : VNode {
  
  const vnode = h(
    elementType,
    { id: id,
      style: !styleObject ? null : styleObject,
      class: !className ? null : className }
  )

  if(container) {
    render(vnode, container)
  } 
  return vnode
}