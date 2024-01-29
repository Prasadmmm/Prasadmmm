import { Component } from '@angular/core';
import { BMICalcs } from 'src/app/Models/bmi';
import { FinanceCalcsService } from 'src/app/finance-calcs.service';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.css']
})
export class BmiFormComponent {
  bmiCalculator = new BMICalcs();
  constructor(private financeCalcsservice: FinanceCalcsService) { }
  onSubmitbmi() 
  {
    console.log("inside component", this.bmiCalculator);
    const obj = this;
    obj.financeCalcsservice.addrecord1(obj.bmiCalculator).subscribe(data  => {
      console.log(data);
      obj.bmiCalculator.bmi = data.bmi;
      obj.bmiCalculator.bmicategory = data.bmicategory;
     
    })
  //  alert('')
  }

  
}
