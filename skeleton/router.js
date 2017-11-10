class Router {
  constructor(node, routes){
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", (event) => {
      this.render();
    });
  }

  render() {
    // debugger;
    let component = this.activeRoute();
    debugger;
    if (component === undefined) {
      this.node.innerHTML = "";
    } else {
      this.node.innerHTML = "";
      let el = component.render();
      this.node.appendChild(el);
    }
  }

  activeRoute() {
    let hashName = window.location.hash.slice(1);
    debugger;
    for (var key in this.routes) {
      if ( key === hashName) {
        return this.routes[key];
      }
    }

  }
}

module.exports = Router;
