export const fldData = [
    {
      "value": "DELGIO",
      "programs": "Java",
      "id": "sme001"
    },
    {
      "value": "SANCOS",
      "programs": "Kotlin",
      "id": "sme002"
    },
    {
      "value": "CASFRA",
      "programs": "Javascript",
      "id": "sme003"
    },
    {
      "value": "PARFRA",
      "programs": "Delphi",
      "id": "sme004"
    },
    {
      "value": "FIOGIA",
      "programs": "Kotlin",
      "id": "sme005"
    },
    {
      "value": "ZAMCHI",
      "programs": "Go",
      "id": "sme006"
    }
];

export const fldDataWupRadio = [
        {
          checked: false,
          "label": "DELGIO",
          "programs": "Java",
          "value": "sme001"
        },
        {
          checked: false,
          "label": "SANCOS",
          "programs": "Kotlin",
          "value": "sme002"
        },
        {
          checked: false,
          "label": "PARFRA",
          "programs": "Delphi",
          "value": "sme004"
        },
        {
          checked: false,
          "label": "ZAMCHI",
          "programs": "Go",
          "value": "sme006"
        }        
];
export const fldDataWupRadioPreChecked = [
  {
    checked: false,
    "label": "DELGIO",
    "programs": "Java",
    "value": "sme001"
  },
  {
    checked: false,
    "label": "SANCOS",
    "programs": "Kotlin",
    "value": "sme002"
  },
  {
    checked: false,
    "label": "PARFRA",
    "programs": "Delphi",
    "value": "sme004"
  },
  {
    checked: true,
    "label": "ZAMCHI",
    "programs": "Go",
    "value": "sme006"
  }        
];

export const fldDataWupCombobox = 
 [
  {
    prop: 'data',
    value: [
      {
        text: 'DELGIO',
        value: 'sme001',
      },
      {
        text: 'SANCOS',
        value: 'sme002',
        selected: true,
      },
      {
        text: 'PARFRA',
        value: 'sme004',
      },
      {
        text: 'ZAMCHI',
        value: 'sme006',
      },      
    ],
  },
  { prop: 'selectable', value: 'one-select' },
  { prop: 'listId', value: 'LISTA' },
]

export const fldDataWupComboboxSeparator = 
 [
  {
    prop: 'data',
    value: [
      {
        text: 'DELGIO',
        value: 'sme001',
      },
      {
        text: 'SANCOS',
        value: 'sme002',
      },
      {
        text: null,
        value: null,
        isSeparator: true,
      },
      {
        text: 'PARFRA',
        value: 'sme004',
      },
      {
        text: 'ZAMCHI',
        value: 'sme006',
      },      
    ],
  },
  { prop: 'selectable', value: 'one-select' },
  { prop: 'listId', value: 'LISTA' },
]


export const fldDataWupComboboxUnselected = 
 [
  {
    prop: 'data',
    value: [
      {
        text: 'DELGIO',
        value: 'sme001',
      },
      {
        text: 'SANCOS',
        value: 'sme002',
      },
      {
        text: 'PARFRA',
        value: 'sme004',
      },
      {
        text: 'ZAMCHI',
        value: 'sme006',
      },      
    ],
  },
  { prop: 'selectable', value: 'one-select' },
  { prop: 'listId', value: 'LISTA' },
]


export function fldConfigFactory(propToChange: {name: string, value: string}[] = []) {
  let toRet: {
    [index: string]: string | object | boolean;
  } = {
    "type": "cmb",
    "showSubmit": true,
    "submitLabel": "Confirm",
    'selectable':'one-select' ,
    'listId':'LISTA',
    'textfieldData' : [
      { prop: 'trailingIcon', value: true },
      { prop: 'icon', value: 'arrow_drop_down' },
      { prop: 'label', value: 'Select a team member' },
      /* { prop: 'leadingLabel', value: true }, */
    ],
  };
  propToChange.forEach(prop => {
    toRet[prop.name] = prop.value;
  });
  return toRet;
}

export function fldConfigItxFactory(propToChange: {name: string, value: string}[] = []) {
  let toRet: {
    [index: string]: string | object | boolean;
  } = {
    "type": "itx",
    "displayedField": "value",
    "showSubmit": true,
    "submitLabel": "Confirm",
    "usePortal": true
  };

  propToChange.forEach(prop => {
    toRet[prop.name] = prop.value;
  });

  return toRet;
}
