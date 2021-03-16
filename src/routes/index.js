import Dashboard from "../views/Dashboard.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/produtos",
    name: "Produtos",
    rtlName: "produtos",
    icon: "tim-icons icon-bag-16",
    component: Dashboard,
    layout: "/produtos"
  },
  {
    path: "/clientes",
    name: "Clientes",
    rtlName: "clientes",
    icon: "tim-icons icon-badge",
    component: Dashboard,
    layout: "/clientes"
  },
  {
    path: "/empresas",
    name: "Empresas",
    rtlName: "empresas",
    icon: "tim-icons icon-bank",
    component: Dashboard,
    layout: "/empresas"
  },
  {
    path: "/vendas",
    name: "Vendas",
    rtlName: "vendas",
    icon: "tim-icons icon-coins",
    component: Dashboard,
    layout: "/vendas"
  },
  {
    path: "/compras",
    name: "Compras",
    rtlName: "compras",
    icon: "tim-icons icon-cart",
    component: Dashboard,
    layout: "/compras"
  },
  {
    path: "/fornecedores",
    name: "Fornecedores",
    rtlName: "fornecedores",
    icon: "tim-icons icon-bus-front-12",
    component: Dashboard,
    layout: "/fornecedores"
  }
  
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin"
  // }
];
export default routes;
