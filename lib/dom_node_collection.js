class DOMNodeCollection {
  constructor(elementArray) {
    this.elementArray = elementArray;
  }

  html(str){
    if (str) {
      this.elementArray.forEach( el => {
        el.innerHTML = str;
      });
    } else {
      return this.elementArray[0].innerHTML;
    }
  }

  empty(){
    this.elementArray.forEach( el => {
      el.innerHTML = "";
    });
  }

  append(arg){
    if (arg instanceof DOMNodeCollection) {
      this.elementArray.forEach( el => {
        arg.elementArray.forEach( argEl => {
        el.innerHTML += argEl.outerHTML;
      });
    });
  } else { // an HTML element, or a string
      this.elementArray.forEach(el => {
        el.innerHTML += arg;
      });
    }
  }

  children(){
    let r = [];
    this.elementArray.forEach( el => {
      let childArr = Array.from(el.children);
      r = r.concat(childArr);
    });
    return new DOMNodeCollection(r);
  }

  parent(){
    let r = [];
    this.elementArray.forEach( el => {
      let parentEl = el.parentElement;
      r.push(parentEl);
    });
    return new DOMNodeCollection(r);
  }

  find(selector){
    let r = [];
    this.elementArray.forEach (el => {
      let selectedArr = Array.from(el.querySelectorAll(selector));
      r = r.concat(selectedArr);
    });
    return new DOMNodeCollection(r);
  }

  remove(){
    this.elementArray.forEach( el => {
      el.remove();
    });
    this.elementArray = [];
  }
}

module.exports = DOMNodeCollection;
