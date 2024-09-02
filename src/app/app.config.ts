import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ProductComponent } from './components/product/product.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ContactComponent } from './components/contact/contact.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    ProductComponent,
    ProductsDetailComponent,
    ContactComponent
  ]
};
