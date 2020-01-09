import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCardModule, MatChipsModule,
  MatToolbarModule, MatListModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AuthGuard } from './_guards';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';



@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, NgReduxModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCardModule,
    MatChipsModule, MatToolbarModule, MatIconModule, MatListModule, routing],

  declarations: [AppComponent, LoginComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [MatIconRegistry, AuthGuard]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
