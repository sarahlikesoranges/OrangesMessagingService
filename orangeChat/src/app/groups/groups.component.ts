import { Component, OnInit } from '@angular/core';

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
  groupname :string = "myFirstGroup";
  groupmember1: string = "member1-ally"
  groupmember2: string = "member2-sam"
  groupmember3: string = "member3-joe"
  groupmember4: string = "member4-brit"

  constructor() { }

  ngOnInit(): void {
  }

}
