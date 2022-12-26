import { DefaultLayout } from "~/layouts";
import { Home } from "~/pages";

export const publicRoutes = [
  { path: "/", page: Home, layout: DefaultLayout },
  { path: "/", page: Home },
];
