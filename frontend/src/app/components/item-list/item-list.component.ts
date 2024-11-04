import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { CommonModule, NgForOf } from '@angular/common';
import { ItemFormComponent } from '../item-form/item-form.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  standalone: true,
  imports: [CommonModule, NgForOf, ItemFormComponent],
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  totalPrice: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice() {
    this.totalPrice = this.items.reduce((total, item) => total + item.price, 0);
  }

  onItemAdded() {
    this.getItems();
  }

  deleteItem(itemId: string) {
    this.itemService.deleteItem(itemId).subscribe(() => {
      this.getItems();
    });
  }
}
