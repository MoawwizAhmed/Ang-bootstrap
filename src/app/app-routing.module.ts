import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {RoutesUtil} from './route-util';

const routes: Routes = [
  { path: '', component: AppComponent  },
  { path: 'home', component: AppComponent  },
  {
    path: RoutesUtil.examples.root,
    loadChildren: () => import('../modules/examples/examples.module').then(m => m.ExamplesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
