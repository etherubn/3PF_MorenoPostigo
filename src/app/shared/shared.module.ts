import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { AgePipe } from './pipes/age.pipe';
import { FontSize20Directive } from './directives/font-size20.directive';



@NgModule({
  declarations: [
    FormErrorComponent,
    FullNamePipe,
    AgePipe,
    FontSize20Directive,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MaterialModule,
    FormErrorComponent,
    FullNamePipe,
    AgePipe,
    FontSize20Directive
  ]
})
export class SharedModule { }
