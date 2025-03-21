type NavigationRouteType = Record<string, NavigationRouteItemType>;
type NavigationRouteItemType = {
  label: string;
  route: string;
};

export const NavigationRouteData: NavigationRouteType = {
  home: {
    label: 'Home',
    route: '/',
  },
  test1: {
    label: 'TestPage1',
    route: '/test1',
  },
  test2: {
    label: 'TestPage2',
    route: '/test2',
  },
};
