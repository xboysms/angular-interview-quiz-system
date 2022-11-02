import { Component, OnInit } from '@angular/core';
import { WindowRef } from '@progress/kendo-angular-dialog';
import { AnswerModel, NewQuestion, QuestionList } from './new-question-model';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {
  typeOfQuestion: { code: string, description: string }[] = [
    {
      code: "paragraph",
      description: "Paragraph"
    },
    {
      code: "checkboxList",
      description: "Checkbox list"
    }
  ];
  data: NewQuestion = new NewQuestion();
  dataList: AnswerModel[] = [];

  constructor(
    public windowRef: WindowRef
  ) { 
    this.data.questionItem = new QuestionList();
  }

  ngOnInit(): void {
  }

  close() {
    this.windowRef.close();
  }

  addAnswer() {
    let number = 0;
    number += 1;

    if(this.dataList.length < 5) this.dataList.push({id: number, languageDesc: "", value: "", checked: false});
  }

  submit() {
    this.data.isSubmitted = true;
    this.data.questionItem.answerItems = this.dataList;
    this.windowRef.close(this.data);
  }

}
