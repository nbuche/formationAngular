import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LimitPipe} from './pipe/limit.pipe';


@NgModule({
  imports:[
    CommonModule
  ],
  declarations: [
    LimitPipe
  ],
  exports: [
    LimitPipe
  ]
})

export class SharedModule {}
