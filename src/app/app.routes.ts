import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { WishComponent } from './wish/wish.component';

export const routes: Routes = [
    { path: '', component: WishComponent },
    { path: 'wishes', component: WishComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductslistComponent },
    { path: 'products/:id', component: ProductdetailsComponent },
    { path: '**', component: NotFoundComponent },
];