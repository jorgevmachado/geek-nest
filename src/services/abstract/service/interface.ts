export type TBy = 'id' | 'cpf' | 'name' | 'email' | 'accountId';

export interface IFindByParams {
  by: TBy;
  value: string;
  withThrow?: boolean;
  withDeleted?: boolean;
}
