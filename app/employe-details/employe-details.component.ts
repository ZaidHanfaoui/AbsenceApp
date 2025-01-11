import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployesService} from "../services/employes.service";
import {Absence, Employe} from '../model/employes.model';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrl: './employe-details.component.css'
})
export class EmployeDetailsComponent implements OnInit{
  employeCode!:string;
  public displayedColumns=['id','date','absnumber','type','motif','firstName','details'];
  employeAbsences !:Array<Absence>;
  absencesDataSource !:MatTableDataSource<Absence>
  constructor(private activatedRoute:ActivatedRoute,private employeService :EmployesService,private router:Router) {
  }
  ngOnInit() {
    this.employeCode=this.activatedRoute.snapshot.params['code']
    this.employeService.getEmployeAbsences(this.employeCode).subscribe({
      next:value => {
        this.employeAbsences=value;
        this.absencesDataSource=new MatTableDataSource<Absence>(this.employeAbsences)

      },
      error:err => {
        console.log(err);
      }

    });
  }

  newAbsence() {
    this.router.navigateByUrl(`/admin/new-absence/${this.employeCode}`)

  }

  absenceDetails(absence:Absence) {
    this.router.navigateByUrl(`/admin/absence-details/${absence.id}`);

  }
}
