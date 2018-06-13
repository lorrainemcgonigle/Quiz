import { Component} from '@angular/core';
import { question } from './question';
import { questionService } from './question.service';
@Component({
    selector: 'pm-quiz-list',
    templateUrl: './quiz-list.component.html'
})

export class QuizListComponent{
    QuizType : string = 'Easy Quiz';
    questions : question[] = [];
    answers : string[] = [];
    //imageURL : string ='http://images.unsplash.com/photo-1506789658653-e5729a1ee31d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f2c036e40ed9e17e974748dc310f481';
    //width : number = 50;
    //showImage : boolean = false;
    //listFilter: string = 'name';
    //toggleShow() : void {
     //   this.showImage = !this.showImage;
    //}
    constructor( private api: questionService){}
    getQuestions(){
        this.api.getQuestionsWithObservable()
        .then(data =>{
            this.questions.push(data);
            this.answers.push(data.results[0].correct_answer);
            this.answers.push(data.results[0].incorrect_answers[0]);
            this.answers.push(data.results[0].incorrect_answers[1]);
            this.answers.push(data.results[0].incorrect_answers[2]);
            console.log(this.answers);
        })
    }
    submitAnswer(){

    }
}