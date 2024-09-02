import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}, // Ruta por defecto
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // Ruta para páginas no encontradas
];
