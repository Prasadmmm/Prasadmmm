import { Component } from '@angular/core';
import { Finance } from '../Models/finace';
import { BMR } from '../Models/bmr';
import { BMICalcs } from '../Models/bmi';
import { FinanceCalcsService } from '../finance-calcs.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.css']
})
export class CalculatorsComponent {
  financeCalculator = new Finance();
  bmrCalculator = new BMR();
  bmiCalculator = new BMICalcs();
  convertedRecord: FormGroup;
  //convertedAmount:number;
  showTotal=false;


  constructor(private financeCalcsservice: FinanceCalcsService) { }

  onSubmit() {
    console.log("inside component", this.financeCalculator);
    const obj = this;
    obj.financeCalcsservice.addrecord(obj.financeCalculator).subscribe(data => {
      console.log(data);
      obj.financeCalculator.monthyRate = data.monthyRate;
      obj.financeCalculator.months = data.months;
      obj.financeCalculator.result = data.result;
      obj.showTotal = true;
    })
  }

  onSubmitbmr() {
    console.log("inside component", this.bmrCalculator);
    const obj = this;
    console.log(obj.bmrCalculator);
    obj.financeCalcsservice.addrecord2(obj.bmrCalculator).subscribe(data  => {
      console.log(data);
      obj.bmrCalculator.bmr = data.bmr;
      obj.bmrCalculator.tdee = data.tdee;
      obj.showTotal = true;
    })
    //  alert('')
  }

  onSubmitbmi() 
  {
    console.log("inside component", this.bmiCalculator);
    const obj = this;
    obj.financeCalcsservice.addrecord1(obj.bmiCalculator).subscribe(data  => {
      console.log(data);
      obj.bmiCalculator.bmi = data.bmi;
      obj.bmiCalculator.bmicategory = data.bmicategory;
      obj.showTotal = true;
    })
  //  alert('')
  }
  
}
