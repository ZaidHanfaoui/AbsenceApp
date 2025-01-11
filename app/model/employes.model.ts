export interface Employe{
  id:string,
  code:string,
  firstName:string,
  lastName:string,
  postId:string
}
export interface Absence{
  id:number,
  date:string,
  JourAbs:number,
  type:string,
  motif:string,
  employe:Employe
}
export enum AbsenceType{
  Maladie,Vacance,Accident,Autre
}
export enum AbsenceMotif{
  Maladie,Deces,Maldiedesenfants
}
