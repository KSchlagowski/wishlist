import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { NgClass } from '@angular/common';
import { EventService } from '../../../shared/services/EventService'

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish! : WishItem;

  constructor (private events: EventService) {}

  get cssClasses() {
    return {'strikeout text-muted': this.wish.isCompleted};
  }

  removeWish() {
    this.events.emit('removeWish', this.wish)
  }

  toggleFullfilled() {
    this.wish.isCompleted = !this.wish.isCompleted;
  }
}
