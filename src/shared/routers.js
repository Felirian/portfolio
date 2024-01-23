import Main from "../pages/Main";
import PhotoPage from "../pages/PhotoPage";

export const ROUTERS = [
  {path: '/code', Component: <Main/>, name: 'Code'},
  {path: '/photo', Component: <PhotoPage/>, name: 'Photo'},
  {path: '/price-list', Component: <PhotoPage/>, name: 'Price list'},
  {path: '/contact', Component: <PhotoPage/>, name: 'Contact'},
]



