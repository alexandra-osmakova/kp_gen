import { EventEmitter } from '@angular/core';

export class PagesIndexService {
  public clickCnt: number = 0;
  onClick: EventEmitter<number> = new EventEmitter();




  public doClick() {
    this.clickCnt++;
    this.onClick.emit(this.clickCnt);
  }

  public backClick() {
    this.clickCnt--;
    this.onClick.emit(this.clickCnt);
  }

  public clearClick() {
    this.clickCnt = 0;
    this.onClick.emit(this.clickCnt);
  }

  public questionPages = [
    {
      "name": "Сайт с нуля",
      "title": [],
      "input": [{ "inputType": "text", "placeholder": "Сфера деятельности" }],
      "counter": 1,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": [],
      "input": [{ "inputType": "text", "placeholder": "Сегмент деятельности" }],
      "counter": 2,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": [],
      "input": [{ "inputType": "text", "placeholder": "Штат, количество человек" }],
      "counter": 3,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": [],
      "input": [{ "inputType": "text", "placeholder": "Филиалы" }],
      "counter": 4,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": ["Масштаб географии"],
      "input": [{ "inputType": "radio", "placeholder": "По городу" },
      { "inputType": "radio", "placeholder": "По региону" },
      { "inputType": "radio", "placeholder": "По РФ" },
      { "inputType": "radio", "placeholder": "По всему миру" }],
      "counter": 5,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": ["Продукты/услуги"],
      "input": [{ "inputType": "text", "placeholder": "Напишите продукт или услугу" }],
      "counter": 6,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": ["Целевая аудитория", "Пол:"],
      "input": [{ "inputType": "radio", "placeholder": "Мужской" },
      { "inputType": "radio", "placeholder": "Женский" },
      { "inputType": "text", "placeholder": "Возраст. Напишите диапазон" },
      { "inputType": "text", "placeholder": "Соц. статус (можно несколько)" }],
      "counter": 7,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": ["Текущая ситуация", "Есть ли сайт:"],
      "input": [{ "inputType": "radio", "placeholder": "Да" },
      { "inputType": "radio", "placeholder": "Нет" }],
      "counter": 8,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": ["Какие инстурменты привлечения клиентов использовались ранее"],
      "input": [{ "inputType": "checkbox", "placeholder": "Контекстная реклама" },
      { "inputType": "checkbox", "placeholder": "Социальные сети" },
      { "inputType": "checkbox", "placeholder": "Сарафанное радио" },
      { "inputType": "checkbox", "placeholder": "Avito и похожие площадки" },
      { "inputType": "checkbox", "placeholder": "Оффлайн реклама" },
      { "inputType": "checkbox", "placeholder": "Другое" }],
      "counter": 9,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": ["Наличие базовой упаковки"],
      "input": [{ "inputType": "checkbox", "placeholder": "Логотип" },
      { "inputType": "checkbox", "placeholder": "Гайдлайн логотипа" },
      { "inputType": "checkbox", "placeholder": "Утвержденные шрифты" },
      { "inputType": "checkbox", "placeholder": "Утвержденные цвета" },
      { "inputType": "checkbox", "placeholder": "Миссия, философия, цели компании" },
      { "inputType": "checkbox", "placeholder": "Брендбук" }],
      "counter": 10,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": ["Наличие предварительного контента"],
      "input": [{ "inputType": "checkbox", "placeholder": "Исходники логотипа" },
      { "inputType": "checkbox", "placeholder": "Фотографии кейсов/продуктов" },
      { "inputType": "checkbox", "placeholder": "Фотографии команды" },
      { "inputType": "checkbox", "placeholder": "Описание услуг/товаров" },
      { "inputType": "checkbox", "placeholder": "Цена/формула расчета" },
      { "inputType": "checkbox", "placeholder": "Видео об услуге/товаре/компании" }],
      "counter": 11,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": ["Последующие интеграции"],
      "input": [{ "inputType": "checkbox", "placeholder": "CRM" },
      { "inputType": "checkbox", "placeholder": "Сквозная аналитика" },
      { "inputType": "checkbox", "placeholder": "Метрики" }],
      "counter": 12,
      "value": ""
    },
    {
      "name": "Сайт с нуля",
      "title": ["Требуемые модули"],
      "input": [{ "inputType": "checkbox", "placeholder": "Квиз тест" },
      { "inputType": "checkbox", "placeholder": "Калькулятор стоимости" },
      { "inputType": "checkbox", "placeholder": "Мультилендинг (модуль)" },
      { "inputType": "checkbox", "placeholder": "Мультилендинг (статичный)" }],
      "counter": 13,
      "value": ""
    }
  ]





  constructor() {
  }
}
