import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./App.css";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;