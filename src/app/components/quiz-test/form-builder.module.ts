import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuizTestComponent } from './quiz-test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { KendoUiModule } from 'src/app/shared/kendo-ui.module';


@NgModule({
  declarations: [
    QuizTestComponent,
    NewQuestionComponent
  ],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    KendoUiModule
  ],
  exports: [
    QuizTestComponent,
    NewQuestionComponent
  ]
})
export class FormBuilderModule { }
