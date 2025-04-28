export interface PasswordDTO{
  id: number;
  type: 'SP' | 'SG' | 'SE';
  numberPass: number;
  emitDate: Date;
  appointDate: Date;
  window: number | null;
  attended: boolean;
}
