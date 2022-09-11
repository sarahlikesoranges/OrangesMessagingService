import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { ChannelComponent } from './channel/channel.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'groups', component: GroupsComponent},
  {path: 'channel', component: ChannelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
