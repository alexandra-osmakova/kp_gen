import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CalcComponent } from './calc/calc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMixComponent } from './input-mix/input-mix.component';

const appRoutes: Routes = [
  {
    path : '',
    component : MainPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'inputs',
    component: InputMixComponent
  },
  {
    path: 'calc',
    component: CalcComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CalcComponent,
    InputMixComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

