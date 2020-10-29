import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MenuListComponent
  }
];

@NgModule({
  declarations: [MenuListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [MenuListComponent]
})
export class MenuModule { }
