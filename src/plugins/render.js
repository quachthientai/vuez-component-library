import { render, h } from 'vue'



export const createShadowComponent = (component, option, root, container) => {
  var vContainer = document.createElement('div')
  vContainer.classList.add(container)
  root.appendChild(vContainer)

  const vComponent = h(component, option)
  render(vComponent, vContainer)
}
