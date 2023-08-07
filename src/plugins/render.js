import { render, h, defineComponent } from 'vue'

export const createShadowComponent = (component, option, root, container) => {
  var vContainer = document.createElement('div')
  vContainer.classList.add(container)
  root.appendChild(vContainer)

  const vComponent = h(component, option)
  render(vComponent, vContainer)
}

export const createSubComponent = (component, option, container, styleClass) => {
  
  const vComponent = defineComponent({
    render() {
      return h(component, option)
    }
  })

  const v = h(vComponent, {class: styleClass});
  
  render(v, container);
}