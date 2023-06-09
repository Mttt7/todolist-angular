import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToDoCreatorComponent } from './to-do-creator/to-do-creator.component';

import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoCreatorComponent,
    TaskComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
