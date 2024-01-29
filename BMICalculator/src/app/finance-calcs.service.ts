import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Finance } from './Models/finace';
import { BMICalcs } from './Models/bmi';
import { BMR } from './Models/bmr';


@Injectable({
  providedIn: 'root'
})
export class FinanceCalcsService {

  private url: string = "http://localhost:8081/api/finance/Finance";

  private PUrl:string="http://localhost:8081/api/finance/create";

  private PUrl2:string="http://localhost:8087/api/bmr";
  private bmiAdd:string="http://localhost:8089/api/create";

 
 
   constructor(private http:HttpClient) { }
 
   getHistory()
   {
     return this.http.get<Finance[]>(this.url)
   }
 
   addrecord(data:Finance)
   {
     return this.http.post<Finance>(`${this.PUrl}`,data)
   }
   addrecord1(data:BMICalcs)
   {
     return this.http.post<BMICalcs>(`${this.bmiAdd}`,data)
   }
   addrecord2(data:BMR)
   {
     return this.http.post<BMR>(`${this.PUrl2}`,data)
   }
 
 }
 