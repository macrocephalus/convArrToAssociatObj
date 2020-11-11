# convArrToAssociatObj  (converting an array of objects to an associative array JS)

const temp = convArrToAssociatObj(offer_un_typ_conf,"id");
in:
exampleArr = [{
    property_id:21,
    value_id:125
    }, {
    property_id:22,
    value_id:4541
    }];
out:    
{
  '21': [ { property_id: 21, value_id: 125 } ],
  '22': [ { property_id: 22, value_id: 4541 } ]
}

example 2:
in:
    const offer_un_typ_conf = [
        {
           'id' : 1,
           'name_ru' : 'цвет',
           'value_ru' : 'Цвет'
       },
       {
           'id' : 2,
           'name_ru' : 'шт',
           'value_ru' : 'Количество шт.'
       },
       {
           'id' : 3,
           'name_ru' : 'мл',
           'value_ru' : 'Ёмкость мл'
       },
       {
           'id' : 4,
           'name_ru' : 'г',
           'value_ru' : 'Вес г.'
       },
       {
           'id' : 5,
           'name_ru' : 'кг',
           'value_ru' : 'Вес кг.'
       },
       {
           'id' : 6,
           'name_ru' : 'литр',
           'value_ru' : 'Ёмкость л.'
       },
       {
           'id' : 7,
           'name_ru' : 'метр',
           'value_ru' : 'Длина м.'
       },
       {
           'id' : 7,
           'name_ru' : 'размер',
           'value_ru' : 'Размер'
       },
       {
           'id' : 9,
           'name_ru' : 'табл.',
           'value_ru' : 'Табл.'
       },
       {
           'id' : 10,
           'name_ru' : 'см',
           'value_ru' : 'Длина см'
       },
       {
           'id' : 11,
           'name_ru' : 'Окрас',
           'value_ru' : 'Окрас'
       },
       {
        'id' : 11,
        'name_ru' : 'Окрас',
        'value_ru' : 'Окрас1'
        },
       {
           'id' : 12,
           'name_ru' : 'вольт',
           'value_ru' : 'Вольт'
       }
   ];

out:
{
  '1': [ { id: 1, name_ru: 'цвет', value_ru: 'Цвет' } ],
  '2': [ { id: 2, name_ru: 'шт', value_ru: 'Количество шт.' } ],
  '3': [ { id: 3, name_ru: 'мл', value_ru: 'Ёмкость мл' } ],
  '4': [ { id: 4, name_ru: 'г', value_ru: 'Вес г.' } ],
  '5': [ { id: 5, name_ru: 'кг', value_ru: 'Вес кг.' } ],
  '6': [ { id: 6, name_ru: 'литр', value_ru: 'Ёмкость л.' } ],
  '7': [
    { id: 7, name_ru: 'метр', value_ru: 'Длина м.' },
    { id: 7, name_ru: 'размер', value_ru: 'Размер' }
  ],
  '9': [ { id: 9, name_ru: 'табл.', value_ru: 'Табл.' } ],
  '10': [ { id: 10, name_ru: 'см', value_ru: 'Длина см' } ],
  '11': [
    { id: 11, name_ru: 'Окрас', value_ru: 'Окрас' },
    { id: 11, name_ru: 'Окрас', value_ru: 'Окрас1' }
  ],
  '12': [ { id: 12, name_ru: 'вольт', value_ru: 'Вольт' } ]
}
