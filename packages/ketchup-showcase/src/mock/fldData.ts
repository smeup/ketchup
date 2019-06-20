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

export function fldConfigFactory(propToChange: {name: string, value: string}[] = []) {
  let toRet: {
    [index: string]: string | object | boolean;
  } = {
    "type": "cmb",
    "displayedField": "value",
    "label": "Select a team member",
    "initialValue": {
      "value": "DELGIO",
      "programs": "Java",
      "id": "sme001"
    },
    "showSubmit": true,
    "submitLabel": "Confirm",
    "usePortal": true
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
