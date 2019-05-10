import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { BodyMainComponent } from './layouts/body-main/body-main.component';
import { ItemViewComponent } from './components/item-view/item-view.component'



// Configure module routes
export const AppRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: BodyMainComponent, children: [
    {path: 'item/:id', component: ItemViewComponent}
  ] },

];

