import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserObjectModule } from '../user-object/user-object.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MessageObjectModule { 
  message!: string;
  user?: UserObjectModule;
}
