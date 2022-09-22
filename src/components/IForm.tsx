export interface IForm {
  name: string;
  grade: string;
  id: number;
  image: File;
}

export interface IFormContext {
  forms: IForm[];
  addDetail: (form: IForm) => void;
  deletedetails: (id: number) => void;
}
