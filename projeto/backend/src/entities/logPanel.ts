import { PasswordDTO } from "./password";

export interface LogPanel {
  id : number;
  passwordId : PasswordDTO['id'];
  password:PasswordDTO;
  callDate: string;
}
