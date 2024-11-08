export type TBy = 'id' | 'cpf' | 'name' | 'email' | 'whatsUp' | 'accountId';

export interface IFindByParams {
  by: TBy;
  value: string;
  withThrow?: boolean;
  withDeleted?: boolean;
}
