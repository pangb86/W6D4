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
    let component = this.activeRoute();
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
    for (var key in this.routes) {
      if ( key === hashName) {
        return this.routes[key];
      }
    }

  }
}

module.exports = Router;
