import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CalcComponent } from './calc/calc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMixComponent } from './input-mix/input-mix.component';
import { PagesIndexService } from './pages-index.service';
import { TextInputComponent } from './text-input/text-input.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';

const appRoutes: Routes = [
  {
    path : '',
    component : MainPageComponent,
    pathMatch: 'full'
  },
  {
    path : 'main',
    component : MainPageComponent,
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
    InputMixComponent,
    TextInputComponent,
    RadioInputComponent,
    CheckboxInputComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [PagesIndexService],
  bootstrap: [AppComponent]
})
export class AppModule {}

