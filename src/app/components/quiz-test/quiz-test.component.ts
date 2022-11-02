import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Form, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
import { WindowCloseResult, WindowService } from '@progress/kendo-angular-dialog';
import { AnswerModel, NewQuestion, QuestionList } from './new-question/new-question-model';
import { NewQuestionComponent } from './new-question/new-question.component';

@Component({
  selector: 'app-quiz-test',
  templateUrl: './quiz-test.component.html',
  styleUrls: ['./quiz-test.component.scss']
})
export class QuizTestComponent implements OnInit {
  @ViewChild("containerRef", { read: ViewContainerRef, static: false }) containerRef: ViewContainerRef = {} as ViewContainerRef;

  dataList: AnswerModel[] = [
    {
      id: 1,
      languageDesc: "Typescript",
      value: "typescript",
      checked: false
    },
    {
      id: 2,
      languageDesc: "Python",
      value: "python",
      checked: false
    },
    {
      id: 3,
      languageDesc: "C#",
      value: "c#",
      checked: false
    },
    {
      id: 4,
      languageDesc: "Other",
      value: "other",
      checked: false
    }
  ];

  answersForm: FormGroup;
  isReview: boolean = false;
  questionsList: QuestionList[] = [
    {
      questionId: 1,
      questionDesc: "Please tell us about yourself",
      answerItems: this.dataList
    },
    {
      questionId: 2,
      questionDesc: "Please select the languages you know",
      answerItems: this.dataList
    }
  ];
  data: NewQuestion = new NewQuestion();

  constructor(
    private fb: FormBuilder,
    public windowService: WindowService
  ) {
    this.data.typeOfQuestion = 'checkboxList';

    this.answersForm = this.fb.group({
      // questions: fb.array([]),
      questionId: new FormControl(),
      questionDesc: new FormControl(),
      answerItems: fb.array([]) //new FormArray([])
    })
  }

  private addControl() {
    let answerItems: any = this.answersForm.get('questions') as FormArray;
    answerItems.push(new FormGroup({
      questionId: new FormControl(),
      questionDesc: new FormControl(), // '', [Validators.required]
      answerItems: this.fb.array([])
    }));
  }

  ngOnInit(): void {
    // this.addControl();
    this.setAnswerItemsToForm();
    // this.setInitForm();
  }

  setInitForm() {
    this.answersForm.setControl('questions', this.fb.array(this.questionsList));
  }

  setAnswerItemsToForm() {
    // Set data for the answerItems on form
    this.answersForm.setControl('answerItems', this.fb.array(this.questionsList[1].answerItems.map(r => r.checked)));
  }

  get answerItems() {
    return this.answersForm.get('answerItems') as FormArray;
  }

  get checkedItem(): AnswerModel {
    return this.questionsList[1].answerItems.find(r => r.checked) || new AnswerModel();
  }

  get checkedItems(): AnswerModel[] {
    return this.questionsList[1].answerItems.filter(r => r.checked) || [];
  }


  isMulti: boolean = true;
  getValue(event: MatCheckboxChange, item: AnswerModel, index: number) {
    item.checked = event.checked;
    this.setAnswerItemsToForm();
    console.log(this.answersForm.getRawValue());
    console.log("checkedItems", this.checkedItems);
  }

  getRadioValue(event: MatRadioChange) {
    this.resetCheckedItems();
    const index = this.questionsList[1].answerItems.indexOf(event.value);
    if (index > -1) {
      event.value.checked = true;
      this.questionsList[1].answerItems[index] = event.value;
    }
  }

  validationType = {
    'questionDesc': [Validators.required]
  }

  isInitFirstTime: boolean = true;
  addNewQuestion() {
    const windowRef = this.windowService.open({
      title: 'Add new question',
      content: NewQuestionComponent,
      appendTo: this.containerRef,
      minWidth: 500,
      minHeight: 400
    });
    const dataWindow = windowRef.content.instance;

    windowRef.result.subscribe((result: any) => {
      console.log("1", result);
      if(!result.isSubmitted) return
      this.data = result;

      if (result as NewQuestion instanceof WindowCloseResult) {
      } else {
        console.log("2", result);
        if (result.isSubmitted) {
          if (result.isRequired) {
            this.answersForm.get('questionDesc')?.addValidators([Validators.required]);
          }
          if (!result.isRequired) {
            this.answersForm.get('questionDesc')?.clearValidators();
          }
          if (result.typeOfQuestion == 'paragraph') {
            this.resetCheckedItems();
          }
          if (result.questionItem.answerItems) {
            this.questionsList[1] = (result as NewQuestion).questionItem;
          }

          this.answersForm.get('questionDesc')?.updateValueAndValidity();
          console.log(this.answersForm);
        }
      }
    })
  }

  resetCheckedItems() {
    this.questionsList[1].answerItems.forEach(r => r.checked = false);
  }

  viewMode() {
    this.isReview = !this.isReview;
  }

  submit() {
    if (this.answersForm.invalid) debugger;
    if (!this.answersForm.invalid) console.log(this.answersForm.getRawValue());
  }
}
