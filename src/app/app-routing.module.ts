import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragBoundaryComponent } from './drag-boundary/drag-boundary.component';
import { ReorderComponent } from './reorder/reorder.component';
import { TwoListsComponent } from './two-lists/two-lists.component';

const routes: Routes = [
  { path: 'boundary', component: DragBoundaryComponent },
  { path: 'reorder', component: ReorderComponent },
  { path: 'two-lists', component: TwoListsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
