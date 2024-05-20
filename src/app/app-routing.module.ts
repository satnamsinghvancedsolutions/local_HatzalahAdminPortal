import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'important-numbers',
    loadChildren: () => import('./modules/important-numbers/important-numbers.module').then(m => m.ImportantNumbersModule)
  },
  {
    path: 'hospital',
    loadChildren: () => import('./modules/hospital/hospital.module').then(m => m.HospitalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
