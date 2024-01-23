import Main from "../pages/Main";
import PhotoPage from "../pages/PhotoPage";

export const ROUTERS = [
  {path: '/*', Component: <Main/>},
  {path: '/code', Component: <Main/>},
  {path: '/photo', Component: <PhotoPage/>},
  {path: '/price-list', Component: <PhotoPage/>},
  {path: '/contact', Component: <PhotoPage/>},
]



