export class NewQuestion {
    isSubmitted!: boolean;
    typeOfQuestion!: string;
    specifyTheirOwn!: boolean;
    isRequired!: boolean;
    questionItem!: QuestionList;
}

export class AnswerModel {
    id!: number;
    languageDesc?: string;
    value!: string;
    checked?: boolean
  }
  
  export class QuestionList {
    questionId!: number;
    answerItems!: AnswerModel[];
    questionDesc!: string;
  }