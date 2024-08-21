export type TBy = 'id' | 'cpf' | 'name' | 'email' | 'accountId';

export interface IFindByParams {
  by: TBy;
  all?: boolean;
  value: string;
  withThrow?: boolean;
}
