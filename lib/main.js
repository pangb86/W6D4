const DOMNodeCollection = require('./dom_node_collection');



window.$l = function(arg) {

  if (arg instanceof HTMLElement === true) {
    let elArray = [arg];
    return new DOMNodeCollection(elArray);
  }
  let functionArray = [];

  if (arg instanceof Function) {
    functionArray.push(arg);
  }



  document.addEventListener("DOMContentLoaded", function() {
    // debugger;
    functionArray.forEach( func => {
      func();
    });
  });
  return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
};

window.$l(() => alert("Test"));
