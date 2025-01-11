import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Observable} from "rxjs";

import {Absence, Employe} from "../model/employes.model";

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  getAbsenceDetails(absenceId: number) {
      return this.http.get(`${environment.backendHost}/absences/${absenceId}`,{responseType:'blob'});
  }

  constructor(private http:HttpClient) { }

  public getAllAbsences():Observable<Array<Absence>> {
    return this.http.get<Array<Absence>>(`${environment.backendHost}/absences`);

  }
  public getEmployes():Observable<Array<Employe>> {
    return this.http.get<Array<Employe>>(`${environment.backendHost}/employes`);

  }
  public getEmployeAbsences(code:string):Observable<Array<Absence>> {
    return this.http.get<Array<Absence>>(`${environment.backendHost}/employes/${code}/absences`);

  }
  public saveAbsence(formData:any):Observable<Absence> {
    return this.http.post<Absence>(`${environment.backendHost}/absences`,formData);

  }


}
