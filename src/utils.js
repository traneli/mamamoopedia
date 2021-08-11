export function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export function jsonToHTML(text) {
  return (
    <p dangerouslySetInnerHTML={ {__html: text}} /> 
  )
}