import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerComponent,
  },
  {
    path: 'todos',
    component: TodoListComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
