/**
 * Para criar usuário: name, email, password
 */

 interface TechObject {
   title: string;
   experience: number;
 }


interface CreatUserData {
  name ?: string;   // é opcional
  email: string;
  password: string;
  techs: Array<string | TechObject >; //array de strings string[]
}

 export default function createUser({ name, email, password }: CreatUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}