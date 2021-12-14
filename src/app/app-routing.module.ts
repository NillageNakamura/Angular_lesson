import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// ルートの追加。
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

// pathMatch は、リダイレクト先を full か prefix で指定できます。full の場合はURLが path と完全に一致、prefix の場合はURLが path の値で始まる場合にリダイレクト。
const routes: Routes = [
  { path: 'products', component:ProductListComponent },
  { path: 'products/:id', component:ProductDetailComponent },
  { path: '', redirectTo: '/products', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
