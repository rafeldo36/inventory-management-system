import { Component, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent {
  item = { name: '', quantity: 0, price: 0, unit: '' };

  @Output() itemAdded = new EventEmitter<void>();

  constructor(private itemService: ItemService) { }

  onSubmit() {
    this.itemService.addItem(this.item).subscribe((newItem) => {
      this.item = { name: '', quantity: 0, price: 0, unit: '' };
      this.itemAdded.emit();
    });
  }
}
