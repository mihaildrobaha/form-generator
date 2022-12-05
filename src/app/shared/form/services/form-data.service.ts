import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  formData: any = [

    {
      type: 'text',
      label: 'Имя',
      isRequired: true,
      isMultiply: false
    },

    {
      type: 'number',
      label: 'Возраст',
      inputValue: 1,
      isRequired: true
    },

    {
      type: 'select',
      label: 'Семейное положение',
      placeholder: 'Не женат / не замужем',
      isRequired: true,
      values: [ 
        {
          value: 'Не женат / не замужем',
          isSelected: false
        },
        {
          value: 'Женат / Замужем',
          isSelected: false
        }
      ]
    },

    {
      type: 'text',
      label: 'ВУЗ',
      placeholder: 'Например, ВолгГУ',
      description: 'Укажите заведения, в которых вы учились.',
      addEducation: 'Добавить еще',
      isRequired: false,
      isMultiply: true,
    },

    {
      type: 'select',
      label: 'Место рождения',
      placeholder: 'Не важно',
      isRequired: false,
      values: [ 
        {
          value: 'Не важно',
          isSelected: false
        },
        {
          value: 'Астрахань',
          isSelected: false
        },
        {
          value: 'Волгоград',
          isSelected: false
        },
        {
          value: 'Волжский',
          isSelected: false
        },
        {
          value: 'Ростов-на-Дону',
          isSelected: false
        },
        {
          value: 'Саратов',
          isSelected: false
        },
        {
          value: 'Элиста',
          isSelected: false
        },
      ]
    },

    {
      type: 'checkbox',
      label: 'Навыки',
      isRequired: false,
      choices : [
        {
          value: 'Общение',
          id: 'communication',
          isChecked: false
        },
        {
          value: 'Иностранные языки',
          id: "languages",
          isChecked: false
        },
        {
          value: 'Бег с препятствиями',
          id: "running",
          isChecked: false
        },
        {
          value: 'Быстрое чтение',
          id: "quick-reading",
          isChecked: false
        },
        {
          value: 'Самозащита',
          id: "self-defense",
          isChecked: false
        },
        {
          value: 'Вождение',
          id: "driving",
          isChecked: false
        },
        {
          value: 'Программирование',
          id: "programming",
          isChecked: false
        },
        {
          value: 'Управление вертолётом',
          id: "helicopter-control",
          isChecked: false
        },
        {
          value: 'Оперное пение',
          id: "opera-singing",
          isChecked: false
        },
        {
          value: 'Выделить всё',
          id: "select-all",
          isChecked: false
        },
      ],
    }
  ]

  inputs$: Observable<any> = of(this.formData)

  getInputs(): Observable<any> {
    return this.inputs$
  }

}
