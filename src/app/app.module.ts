import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {StoreModule} from '@ngrx/store'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert/alert.component';
import { SharedModule } from './shared/shared.module';
import * as fromApp from './store/app.reducer'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // module for routing
    HttpClientModule,
    //RecipesModule, comment this coz we are loading it lazily, if not commented then it loads both eagerly and lazily
    //ShoppingListModule, comment this coz we are loading it lazily, if not commented then it loads both eagerly and lazily
    SharedModule,
    //AuthModule  comment this coz we are loading it lazily, if not commented then it loads both eagerly and lazily
    StoreModule.forRoot(fromApp.appReducer)  // This is our merged reducers map
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents:[
    //components which do not have a selector and are created are added to this array
    //for Angular 9 or higher we donot need entryComponents
    AlertComponent
  ]
})
export class AppModule { }
