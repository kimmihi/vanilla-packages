export default class createRouter {
  constructor(target, routes) {
    this.routes = routes;
    this.target = target;
    this.trace();
  }

  trace() {
    window.addEventListener("hashchange", (e) => {
      const pathname = location.hash;
      const currentPage = pathname.split("#")[1];
      const nextComponent = this.routes.find(
        (route) => route.path === currentPage
      );
      this.target.innerHTML = new nextComponent.element().template();
    });
  }
}
