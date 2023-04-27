function loadLocalRoutes() {
  const localRoutes = [];
  const files = require.context("../router/main", true, /\.js$/);
  // console.log(files);
  const modules = files.keys().map(files);
  for (const item of modules) {
    const modules = item.default;
    localRoutes.push(modules);
  }

  return localRoutes;
}
export function mapMenuToRoutes(userMenus) {
  const localRoutes = loadLocalRoutes();

  const routes = [];
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url);
      if (route) routes.push(route);
    }
  }

  return routes;
}
