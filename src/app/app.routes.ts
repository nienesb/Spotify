import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {FollowComponent} from  './follow/follow.component';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {CallbackComponent} from "./callback.componenent";

const routes: Routes = [
  {path:'', component: SearchComponent},
  {path:'home', component: SearchComponent},
  {path:'follow', component: FollowComponent},
  {path:'login', component: LoginComponent},
  {path:'callback', component: CallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {

}


