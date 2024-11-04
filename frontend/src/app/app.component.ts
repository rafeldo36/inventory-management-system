import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemFormComponent } from "./components/item-form/item-form.component";
import { ItemListComponent } from './components/item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemFormComponent, ItemListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
