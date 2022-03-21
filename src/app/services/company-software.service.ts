import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanySoftwareService {

  public dataCompanySoftware:any[] = []

  cargar(){
   let tmp:any = localStorage.getItem('companySoftware')
   if(tmp == undefined || tmp == null){
     this.dataCompanySoftware = [];
   }
   else{
    this.dataCompanySoftware =  JSON.parse(tmp)
   }
  }

  constructor() { }
}
