import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from "@angular/forms";
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// Forms
//import { MdButtonModule} from "@angular/material";
import { MatButtonModule } from '@angular/material/button'; 

// Routes
import {Routes, RouterModule} from '@angular/router';

// firebase configuration
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';



const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'books', component: BooksComponent},
  {path:'books/:id', component: BookComponent},
  {path:'add-book', component:AddBookComponent},
  {path:'edit-book/:id', component:EditBookComponent},
  {path:'delete-book/:id', component:DeleteBookComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase, 'book-notes-app'),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
