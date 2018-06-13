import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz-list.component';
import { FormsModule} from '@angular/forms';
import { HttpModule, Response } from '@angular/http';
import { questionService } from './question.service';


@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    

  ],
  providers: [
    questionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
