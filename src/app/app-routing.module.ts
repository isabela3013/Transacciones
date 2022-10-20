import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparacionComponent } from './componentes/comparacion/comparacion.component';
import { IntegracionErrorComponent } from './componentes/integracion-error/integracion-error.component';
import { AuthGuard } from './servicios/auth/auth.guard';

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
  // {
  //   path: '**',
  //   component: IntegracionErrorComponent,
  // },
  {
    path: 'integracion-error',
    redirectTo: '/'
    //canActivate: [AuthGuard]
  },
  {
    path: 'comparacion',
    component: ComparacionComponent,
    //canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
