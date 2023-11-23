import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationComponent } from './pages/certification/certification.component';

const routes: Routes = [
  {path: '', redirectTo: 'cert', pathMatch: 'full'},
  {path: 'cert', component: CertificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
