import {Component, OnInit} from '@angular/core';
import {EmployesService} from "../services/employes.service";
import {ActivatedRoute} from "@angular/router";
import {B} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-absence-details',
  templateUrl: './absence-details.component.html',
  styleUrl: './absence-details.component.css'
})
export class AbsenceDetailsComponent implements OnInit{
  absenceId!:number;
  constructor(private employeService:EmployesService,private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.absenceId=this.route.snapshot.params['id'];
    this.employeService.getAbsenceDetails(this.absenceId).subscribe({
     next:value => {
       let blob=new Blob([value]);


     },error:err => {
       console.log(err);

        }
    }


    )
  }

}
