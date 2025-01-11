import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {AbsenceType} from "../model/employes.model";
import {EmployesService} from "../services/employes.service";

@Component({
  selector: 'app-new-absence',
  templateUrl: './new-absence.component.html',
  styleUrl: './new-absence.component.css'
})
export class NewAbsenceComponent implements OnInit {
  absenceFormGroup!: FormGroup;
  employeCode!:string;
  absenceDate!:string;
  showProgress:boolean=false;
  absenceTypes :string[]=[];
  constructor(private fb: FormBuilder , private activatedRoute:ActivatedRoute,private employesService:EmployesService) {
  }

  ngOnInit() {
    for(let elt in AbsenceType){
      let value=AbsenceType[elt];
      if(typeof value==='string'){
        this.absenceTypes.push(value);
      }

    }
    this.employeCode=this.activatedRoute.snapshot.params['employeCode']
    this.absenceDate=this.activatedRoute.snapshot.params['absenceDate']
    this.absenceFormGroup = this.fb.group({
      date: this.fb.control(''),
      absnumber: this.fb.control(''),
      type: this.fb.control(''),
      employeCode: this.fb.control(this.employeCode)

    });
  }

  saveAbsence() {
    this.showProgress=true;
    let date =new Date(this.absenceFormGroup.value.date);
    let formattedDate=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();


    let formData=new FormData();
    formData.set('date',formattedDate);
    formData.set('absnumber',this.absenceFormGroup.value.absnumber);
    formData.set('type',this.absenceFormGroup.value.type);
    formData.set('employeCode',this.absenceFormGroup.value.employeCode);
    this.employesService.saveAbsence(formData).subscribe(
      {
        next:value => {
          this.showProgress=false;
          alert('Absence Saved successfully!')
        },
        error:err => {
          console.log(err);
        }

      }
    );

  }
}
