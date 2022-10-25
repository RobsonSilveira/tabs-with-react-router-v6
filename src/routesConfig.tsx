import { Products } from './components/Products';

import { ProductDetail } from './components/ProductDetail';

export const routesConfig = [
  {
    path: 'products',
    title: 'Produtos',
    component: <Products />,
    hiddenOnTab: false
  },
  {
    path: 'products/:id',
    title: 'Detalhe do Produto',
    component: <ProductDetail />,
    hiddenOnTab: true
  },
  {
    path: 'customers',
    title: 'Clientes',
    component: <p>Página de Clientes</p>,
    hiddenOnTab: false
  }
];
