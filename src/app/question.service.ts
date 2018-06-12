import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { question } from './question';

@Injectable({
  providedIn: 'root',
})
export class questionService {

  private questionsUrl = 'https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple';
  constructor(private http:Http) { }
  
  getQuestionsWithObservable()  {
    return this.http.get(this.questionsUrl)
        .toPromise().then(resp => resp.json())
        .catch(err =>{
            console.log("error");
        })
        
    }
    

   
}