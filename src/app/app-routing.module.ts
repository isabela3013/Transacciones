import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparacionComponent } from './componentes/comparacion/comparacion.component';
import { IntegracionErrorComponent } from './componentes/integracion-error/integracion-error.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: IntegracionErrorComponent,
  // }
  // ,
  {
    path: '',
    component: IntegracionErrorComponent,
  },
  {
    path: '**',
    component: IntegracionErrorComponent,
  },
  {
    path: 'integracion-error',
    component: IntegracionErrorComponent,
  },
  {
    path: 'comparacion',
    component: ComparacionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
