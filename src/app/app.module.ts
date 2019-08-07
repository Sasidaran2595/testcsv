import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssueCountReaderComponent } from './issue-count-reader/issue-count-reader.component';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    IssueCountReaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
