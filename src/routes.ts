import AddProducts from "./components/AddProducts";
import ListProduct from "./components/ListProduct";
import Route from "./route";

const routes: Route[] = [
  {
    path: "/",
    name: "Root Page",
    component: AddProducts,
    exact: true,
  },
  {
    path: "/list",
    name: "List Page",
    component: ListProduct,
    exact: true,
  },
];

export default routes;
