export interface IForm {
  name: string;
  grade: string;
  id: number;
  //   image: string;
}

export interface IFormContext {
  forms: IForm[];
  addDetail: (form: IForm) => void;
}
