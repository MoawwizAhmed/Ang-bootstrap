import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import { ExamplesComponent } from "./examples.component";
import { MessagesComponent } from "./messages/message.component";

const routes: Routes = [
  { path: '', component: ExamplesComponent, children:[
    { path: 'messages', component: MessagesComponent  },
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations:[
    ExamplesComponent,
    MessagesComponent
  ]
})
export class ExamplesModule{}
