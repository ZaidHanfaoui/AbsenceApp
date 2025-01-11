import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {EmployesService} from "../services/employes.service";
import {Employe} from "../model/employes.model";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css'
})
export class EmployeComponent implements OnInit{
  employes!:Array<Employe>;
  employesDataSource!:MatTableDataSource<Employe>;
  displayedColumns:string[]=['id','firstName','lastName','code','postId'];
  constructor(private employesService :EmployesService , private router:Router ) {
  }
  ngOnInit() {
    this.employesService.getEmployes()
      .subscribe({
        next:value => {
          this.employes=value;
          this.employesDataSource=new MatTableDataSource<Employe>(this.employes);


        },
        error:err => {
          console.log(err);
        }
      })
  }
  employeAbsences(employe: Employe) {
    this.router.navigateByUrl(`/admin/employe-details/${employe.code}`);


  }
}
