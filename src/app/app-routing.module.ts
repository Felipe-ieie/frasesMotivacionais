import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotivacionalComponent } from './motivacional/motivacional.component';

const routes: Routes = [
  { path: "", component: MotivacionalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
