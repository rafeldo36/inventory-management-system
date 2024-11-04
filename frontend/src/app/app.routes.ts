import { Routes } from '@angular/router';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';

export const routes: Routes = [
    { path: '', component: ItemFormComponent },
    { path: 'items', component: ItemListComponent }
];
