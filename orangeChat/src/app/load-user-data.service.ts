import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadUserDataService {

  username: string = "";
  useremail: string = "";
  name: string = "";
  useraccounttype: string = "";


  constructor() { }

  getUserInfo(){
  }
}
