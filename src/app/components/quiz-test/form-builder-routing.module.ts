import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuizTestComponent } from './quiz-test.component';

const routes: Routes = [
  {
    path: '',
    component: QuizTestComponent,
    children: [
      {
        path: 'builder',
        component: NewQuestionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
