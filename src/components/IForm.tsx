export interface IForm {
  name: string;
  grade: string;
  //   image: string;
}

export interface IFormContext {
  forms: IForm[];
  addDetail: (form: IForm) => void;
}
