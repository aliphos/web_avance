import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {ListInterface} from "../interfaces/list.interface";
import {Auteur} from "../models/auteur-model";
import { Livre } from '../models/livre-model';
import {ReponseInterface} from "../interfaces/reponse.interface";
import {Logger} from "./customLogging.service";
import {LogLevel} from "../models/logLevel-model";

@Injectable({
  providedIn: 'root'
})
export class WebService {
  configUrl: String = "http://localhost:8090/api"

   httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, x-requested-with',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      "Access-Control-Max-Age" : '3600'
    })
  };

  constructor(private http: HttpClient) {

  }


  getAuthors() {
     return this.http.get<Auteur[]>(this.configUrl+"/authors",this.httpOptions);

  }

  getBooks() {
    return this.http.get<Livre[]>(this.configUrl+"/books",this.httpOptions);
  }

  deleteAuthor(id:number){
    return this.http.delete<ReponseInterface>(this.configUrl+"/authors/"+id,this.httpOptions);
  }


  deleteBook(id:number){
    return this.http.delete<ReponseInterface>(this.configUrl+"/books/"+id,this.httpOptions);
  }

  postAuthor(auteur:Auteur){
    return this.http.post<Auteur[]>(this.configUrl+"/authors",auteur,this.httpOptions);
  }

  postBook(livre:Livre){
    return this.http.post<Livre[]>(this.configUrl+"/books",livre,this.httpOptions);
  }

  putAuthor(auteur:Auteur){
    return this.http.put<Auteur[]>(this.configUrl+"/authors",auteur,this.httpOptions);
  }

  putBook(livre:Livre){
    return this.http.put<Livre[]>(this.configUrl+"/books",livre,this.httpOptions);
  }

  envoiLog(message:string){
    let customheaders = this.httpOptions;
    customheaders.headers.append("Content-Type","text/plain");
    return this.http.post("http://localhost:5000/logsAngular",message);
  }



}

