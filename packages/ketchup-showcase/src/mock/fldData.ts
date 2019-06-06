export const fldData = [
    { "value": "DELGIO" },
    { "value": "CASFRA" },
    { "value": "PARFRA" },
    { "value": "FIOGIA" },
    { "value": "ZAMCHI" }
];

export function fldConfigFactory(propToChange: {name: string, value: string}[] = []) {
  let toRet: {
    [index: string]: string | object | boolean;
  } = {
    "type": "cmb",
    "displayedField": "value",
    "label": "Select a team member",
    "initialValue": {
      "value": "FIOGIA"
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