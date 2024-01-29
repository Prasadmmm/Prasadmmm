import { Component } from '@angular/core';
import { BMR } from 'src/app/Models/bmr';
import { FinanceCalcsService } from 'src/app/finance-calcs.service';

@Component({
  selector: 'app-bmr-form',
  templateUrl: './bmr-form.component.html',
  styleUrls: ['./bmr-form.component.css']
})
export class BmrFormComponent {

  bmrCalculator = new BMR();


  constructor(private financeCalcsservice: FinanceCalcsService) { }
  onSubmitbmr() {
    console.log("inside component", this.bmrCalculator);
    const obj = this;
    console.log(obj.bmrCalculator);
    obj.financeCalcsservice.addrecord2(obj.bmrCalculator).subscribe(data  => {
      console.log(data);
      obj.bmrCalculator.bmr = data.bmr;
      obj.bmrCalculator.tdee = data.tdee;
    
    })
   
  }
}
