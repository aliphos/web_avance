import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {ListInterface} from "../interfaces/list.interface";
import {Auteur} from "../models/auteur-model";
import { Livre } from '../models/livre-model';
import {ReponseInterface} from "../interfaces/reponse.interface";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl: String = "http://localhost:8090/api"

  constructor(private http: HttpClient) {
  }


  getAuthors() {
     return this.http.get<Auteur[]>(this.configUrl+"/authors");
  }

  getBooks() {
    return this.http.get<Livre[]>(this.configUrl+"/books");
  }

  deleteAuthor(id:number){
    return this.http.delete<ReponseInterface>(this.configUrl+"/authors/"+id);
  }


  deleteBook(id:number){
    return this.http.delete<ReponseInterface>(this.configUrl+"/books/"+id);
  }

  postAuthor(auteur:Auteur){
    return this.http.post<Auteur[]>(this.configUrl+"/authors",auteur);
  }

  postBook(livre:Livre){
    return this.http.post<Livre[]>(this.configUrl+"/books",livre);
  }

  putAuthor(auteur:Auteur){
    return this.http.put<Auteur[]>(this.configUrl+"/authors",auteur);
  }

  putBook(livre:Livre){
    return this.http.put<Livre[]>(this.configUrl+"/books",livre);
  }



}

