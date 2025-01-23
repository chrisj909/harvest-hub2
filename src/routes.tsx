import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import { FarmPage } from "./pages/blog/FarmPage";
import { ProductPage } from "./pages/blog/ProductPage";
import { VendorPage } from "./pages/blog/VendorPage";
import { DealPage } from "./pages/blog/DealPage";
import { ArticlePage } from "./pages/blog/ArticlePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/blog/farms/:id",
    element: <FarmPage />,
  },
  {
    path: "/blog/products/:id",
    element: <ProductPage />,
  },
  {
    path: "/blog/vendors/:id",
    element: <VendorPage />,
  },
  {
    path: "/blog/deals/:id",
    element: <DealPage />,
  },
  {
    path: "/blog/articles/:id",
    element: <ArticlePage />,
  },
]);