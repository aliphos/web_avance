import { Injectable } from '@angular/core';
import {WebService} from "./web.service";




@Injectable({
  providedIn: 'root'
})
export class Logger {

  myHttp : WebService;




  constructor(myHttp : WebService) {
    this.myHttp = myHttp;
  }
  log(message:string,LogLevel:number){
    let body = '{"message": "'+message+'", "level" :"'+LogLevel+'", "pasHeader" : "1"}'



    this.myHttp.envoiLog(body).subscribe().unsubscribe();

  }







}
