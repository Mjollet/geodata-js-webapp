import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { SearchComponent } from './views/components/search/search.component';
import { LoginComponent } from './views/components/login/login.component';
import { EditComponent } from './views/components/edit/edit.component';
import { HomeComponent } from './views/components/home/home.component';

import { AuthService } from './providers/auth-token/auth.service';
import { AddTokenInterceptor } from './providers/interceptor';
import { SearchService } from './providers/search/search.service';
import { ApiVersionComponent } from './views/components/api-version/api-version/api-version.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    LoginComponent,
    EditComponent,
    ApiVersionComponent, 
    
  ],
  entryComponents: [ApiVersionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  
  ],
  
  providers: [ 
    AuthService,
    SearchService ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
