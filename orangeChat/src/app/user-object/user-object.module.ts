import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserObjectModule { 

  username!: string;
  name!: string;
  email!: string;
  usertype!: number;
}
