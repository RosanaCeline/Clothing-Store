import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home/Home";
import Produtos from "../pages/Produtos/Produtos";
import Carrinho from "../pages/Carrinho/Carrinho";
import FinalizarCompra from "../pages/FinalizarCompra/FinalizarCompra";
import Contato from "../pages/Contato/Contato";
import NotFound from "../pages/NotFound/NotFound";


const routes = [
  {
    path: "/",
    element: <MainLayout />,  // Layout com Header e Footer
    children: [
      { index: true, element: <Home /> }, // rota inicial
      { path: "produtos", element: <Produtos /> },
      { path: "carrinho", element: <Carrinho /> },
      { path: "finalizar", element: <FinalizarCompra /> },
      { path: "contato", element: <Contato /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
