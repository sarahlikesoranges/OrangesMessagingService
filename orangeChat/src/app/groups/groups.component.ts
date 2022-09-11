import { Component, OnInit } from '@angular/core';
import { GroupObjectModule } from '../group-object/group-object.module';
import { ChannelObjectModule } from '../channel-object/channel-object.module';
import { UserObjectModule } from '../user-object/user-object.module';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  username : string = "Sarah's Oranges";
  usertype : string = "superduperadmin";
  name : string = "sarah";
  email: string = 'sarah@oranges.com';
  groups:[] = [];
  channels: [] = [];
  groupname :string = "myFirstGroup";
  groupmember1: string = "member1-ally"
  groupmember2: string = "member2-sam"
  groupmember3: string = "member3-joe"
  groupmember4: string = "member4-brit"

  constructor(private group: GroupObjectModule, private channel: ChannelObjectModule, private user: UserObjectModule) { }

  ngOnInit(): void {
    
    sessionStorage.setItem("username", this.username);
    sessionStorage.setItem('name', this.name);
    sessionStorage.setItem('email', this.email);
    sessionStorage.setItem('usertype', this.usertype);

  }

}
