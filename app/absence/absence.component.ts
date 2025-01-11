import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {EmployesService} from "../services/employes.service";

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrl: './absence.component.css'
})
export class AbsenceComponent implements OnInit{

  public absences:any;
  public dataSource:any;
  public displayedColumns=['id','date','absnumber','type','motif','firstName'];
  public paginator: any;
  public sort: any;
  constructor(private employesService:EmployesService ) {
  }
  ngOnInit() {
    this.employesService.getAllAbsences()
      .subscribe({
        next:data => {
          this.absences=data;
          this.dataSource=new MatTableDataSource(this.absences);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;

        },
        error:err => {
          console.log(err)
        }
      })
  }
  ngAfterViewInit(){

  }

}
