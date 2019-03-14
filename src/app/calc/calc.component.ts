import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() {
    if (this.firstStage.length != 0) {
      this.secondStage = ['То же, что и в первой версии'];
      this.thirdStage = ['То же, что и во второй версии'];
    }
  }

  ngOnInit() {
  }

  preparationColumn: any = [];
  firstStage: any = [];
  secondStage: any = [];
  thirdStage: any = [];


  allOptionsBlock: any = [
    'главный блок', 'квиз-тест', 'калькулятор', 'о нас/о проекте', 'контакты', 'гарантии',
    'скидки', 'портфолио', 'цены, пакеты услуг', 'преимущества(почему мы?)', 'отзывы',
    'новостной блог', 'призыв к действию', 'услуги', 'доп. услуги', 'галерея', 'видеообращения',
    'команда'
  ]

  allOptionsModules: any = [
    'мультилендинг', 'виджет обратного звонка', 'онлайн-чат', 'форма обратной связи', 'система управления сайтом'
  ]

  allOptionsAditional: any = [
    'подбор предварительных изображений', 'заполнение контента', 'подбор шрифтов', 'копирайтинг(2000 символов)',
    'создание логотипа', 'настройка рекламной компании', 'подбор цветовой схемы сайта',
  ]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    if (this.firstStage.length != 0) {
      for (let i = 0; i < this.firstStage.length; i++) {
        if (this.secondStage.indexOf(this.firstStage[i]) == -1) {
          this.secondStage.push(this.firstStage[i])
        }
      }

      for (let i = 0; i < this.secondStage.length; i++) {
        if (this.thirdStage.indexOf(this.secondStage[i]) == -1) {
          this.thirdStage.push(this.secondStage[i])
        }
      }
    }
  }
}
