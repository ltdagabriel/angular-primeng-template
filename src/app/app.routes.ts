import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { TestComponent } from './pages/test/test.component';
import { EntitiesComponent } from './pages/entities/entities.component';
import { VendasComponent } from './pages/vendas/vendas.component';

export const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: HomeComponent
    },
    {
      path: 'products',
      component: ProductsComponent
    },
    {
      path: 'vendas',
      component: VendasComponent
    },
    {
      path: 'entidades',
      component: EntitiesComponent
    }
  ]
  },
];
