import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish/wish-list/wish-list.component';
import { AddWishFormComponent } from './wish/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish/wish-filter/wish-filter.component';
import { WishComponent } from "./wish/wish.component";
import { ContactComponent } from "./contact/contact.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent, WishComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor (private router: Router) {}

  title = 'router-app';
  
  goToContact() {
    this.router.navigate(['contact']);
  }
}
