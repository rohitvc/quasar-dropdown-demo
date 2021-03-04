export function isElementLoaded (type, attr, value) {
  return !!document.querySelector(`${type}[${attr}="${value}"]`)
}

const setAttributes = (elem, attrs) => {
  attrs.forEach(attr => {
    elem.setAttribute(attr.name, attr.value)
  })
}

export const attachImport = url => {
  if (!isElementLoaded('link', 'href', url)) {
    const fontImport = document.createElement('link')
    setAttributes(fontImport, [
      {
        name: 'href',
        value: url
      },
      { name: 'rel', value: 'stylesheet' },
      { name: 'type', value: 'text/css' }
    ])
    document.head.appendChild(fontImport)
  }
}
