import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserObjectModule } from '../user-object/user-object.module';
import { ChannelObjectModule } from '../channel-object/channel-object.module';
import { MessageObjectModule } from '../message-object/message-object.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserObjectModule,
    ChannelObjectModule
  ]
})
export class GroupObjectModule  { 
  channels!: [ChannelObjectModule];
  members!:[UserObjectModule];
  groupname!:string;

  addMember(user: UserObjectModule){
    this.members.push(user)
  }
  addChannel(channel: ChannelObjectModule){
    this.channels.push(channel)
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
  removeChannel(channel:ChannelObjectModule){
    let i = this.channels.findIndex(u =>
      ((channel.channelname == u.channelname)));
    if(i == -1){
      console.log('no member found')
      }else{
        this.channels.splice(i,1);
      }
  }
}
