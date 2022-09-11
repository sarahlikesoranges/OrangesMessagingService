import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserObjectModule } from '../user-object/user-object.module';
import { MessageObjectModule } from '../message-object/message-object.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserObjectModule,
    MessageObjectModule
  ]
})
export class ChannelObjectModule {
  channelname!: string;
  members!: [UserObjectModule];
  messages!:[MessageObjectModule];

  addMembers(user:UserObjectModule){
    this.members.push(user);
  }

  removeMembers(user:UserObjectModule){
    let i = this.members.findIndex(u =>
      ((user.username == u.username)));
    if(i == -1){
      console.log('no member found')
      }else{
        this.members.splice(i,1);
      }
  }

  addMesage(message:MessageObjectModule){
    this.messages.push(message);
  }

  
  }

