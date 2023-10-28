export interface IData {
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export type IPatch = Pick<IData, 'isCompleted'>;
