import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import {RoutesUtil} from './route-util';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full'},
  {
    path: RoutesUtil.examples.root,
    loadChildren: () => import('../modules/examples/examples.module').then(m => m.ExamplesModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
