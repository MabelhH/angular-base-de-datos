import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Enviroments } from 'src/enviroments/enviroments';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './pages/home/home.component';
import { ComponentModule } from './component/component.module';

@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(Enviroments.firebase)),
    provideAuth(() => getAuth()),
    PagesModule,
    ComponentModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
