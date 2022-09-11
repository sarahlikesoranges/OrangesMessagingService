import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  groupname: string = "sassygroup";
  groupmember1: string = "member1-ally"
  groupmember2: string = "member2-sam"
  groupmember3: string = "member3-joe"
  groupmember4: string = "member4-brit"
  message: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  sendMessage(){
    
  }

}
