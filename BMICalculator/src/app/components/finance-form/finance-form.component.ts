import { Component } from '@angular/core';
import { Finance } from 'src/app/Models/finace';
import { FinanceCalcsService } from 'src/app/finance-calcs.service';

@Component({
  selector: 'app-finance-form',
  templateUrl: './finance-form.component.html',
  styleUrls: ['./finance-form.component.css']
})
export class FinanceFormComponent {

  financeCalculator = new Finance();

  constructor(private financeCalcsservice: FinanceCalcsService) { }
  
  onSubmit() {
    console.log("inside component", this.financeCalculator);
    const obj = this;
    obj.financeCalcsservice.addrecord(obj.financeCalculator).subscribe(data => {
      console.log(data);
      obj.financeCalculator.monthyRate = data.monthyRate;
      obj.financeCalculator.months = data.months;
      obj.financeCalculator.result = data.result;
      // obj.showTotal = true;
    })
    
  }
  onClear(){
    this.financeCalculator = new Finance();
  }
}
