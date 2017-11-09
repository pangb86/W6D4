const DOMNodeCollection = require('./dom_node_collection');

window.$l = function(arg) {

  if (arg instanceof HTMLElement === true) {
    let elArray = [arg];
    return new DOMNodeCollection(elArray);
  }

  return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
};
