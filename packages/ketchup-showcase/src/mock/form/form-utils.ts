export function buildFormEventCallback(eventType: string) {
  return (detail: any) => formEventCallbackCall(eventType, detail);
}

export function formEventCallbackCall(eventType: string, detail: any) {
  console.log('FormEventCallbackCall for eventType: ' + eventType);
  let result = chooseAndApplyFakeBackendLogic(eventType, detail);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result) resolve(result);
      else reject('something went wrong in update callback');
    }, 2);
  });
}

export function chooseAndApplyFakeBackendLogic(eventType: string, detail: any) {
  let result = {};
  if (eventType == 'FormActionSubmitted') {
    result = fakeUpdateBackendLogic(detail);
  } else {
    let isToCheck = false;
    if (detail.field && detail.field.key) {
      let actualField = detail.actual.fields[detail.field.key];
      if (actualField.extra && actualField.extra.liveBackendCheck) {
        isToCheck = true;
      }
    }
    if (isToCheck) {
      result = fakeCheckBackendLogic(detail);
    } else {
      console.log('Field is not to liveBackendCheck');
    }
  }
  return result;
}

export function fakeUpdateBackendLogic(detail: any) {
  return fakeBackendLogic(
    detail.extra && detail.extra.aParamForBackend,
    false,
    detail.isValid,
    detail.field,
    detail.actual.fields,
    detail.action
  );
}

export function fakeCheckBackendLogic(detail: any) {
  return fakeBackendLogic(
    detail.extra && detail.extra.aParamForBackend,
    true,
    detail.isValid,
    detail.field,
    detail.actual.fields,
    detail.action
  );
}

export function fakeBackendLogic(
  aParamForBackend: any,
  isCheck: boolean,
  isFormValid: boolean,
  field: any,
  actualFields: any,
  action: any
) {
  console.log(
    'Applying fake backend logic with aParamForBackend = ' +
      aParamForBackend +
      ', isCheck = ' +
      isCheck +
      ', isFormValid = ' +
      isFormValid +
      ', field = ' +
      (field ? field.key : 'empty')
  );

  aParamForBackend = aParamForBackend || 'NON';

  // deep copy
  let newFields = JSON.parse(JSON.stringify(actualFields));
  // shallow copy
  //let newFields = { ...actualFields};

  let isRecordValid = !(isFormValid == false); // also undefined is ok
  let extraMessages: any = [];

  if (newFields) {
    const keys = Object.keys(newFields);
    let fields: any = [];
    keys.forEach((key) => {
      fields.push(newFields[key]);
    });

    fields.forEach((field: any) => {
      // messages
      let level = null;
      let fieldKey = null;

      if (fieldValueIsOfType(field, 'FEM')) {
        level = 'ERROR';
        fieldKey = field.key;
      } else if (fieldValueIsOfType(field, 'FWM')) {
        level = 'WARNING';
        fieldKey = field.key;
      } else if (fieldValueIsOfType(field, 'FIM')) {
        level = 'INFO';
        fieldKey = field.key;
      } else if (fieldValueIsOfType(field, 'GEM')) {
        level = 'ERROR';
      } else if (fieldValueIsOfType(field, 'GWM')) {
        level = 'WARNING';
      } else if (fieldValueIsOfType(field, 'GIM')) {
        level = 'INFO';
      }

      if (level) {
        if (level == 'ERROR') {
          isRecordValid = false;
        }
        console.log(
          'Adding backend message for fieldKey' +
            fieldKey +
            ' and level ' +
            level
        );

        extraMessages = [
          ...extraMessages,
          {
            ...(fieldKey ? { fieldKey: fieldKey } : {}),
            text:
              level + ' message from server (' + new Date().toISOString() + ')',
            level: level,
          },
        ];
      }

      // values
      if (fieldValueIsOfType(field, 'FVM')) {
        console.log('FVM backend modify of field with key ' + field.key);
        newFields = fieldValueModify(aParamForBackend, newFields, field.key);
      }
      if (fieldValueIsOfType(field, 'GVM')) {
        console.log('GVM backend modify of field with key ' + field.key);
        keys.forEach((key) => {
          newFields = fieldValueModify(aParamForBackend, newFields, key);
        });
      }
      if (fieldValueIsOfType(field, 'GRS')) {
        console.log('GVM backend set readonly for field with key ' + field.key);
        keys.forEach((key) => {
          newFields = fieldReadonlyModify(
            aParamForBackend,
            newFields,
            key,
            true
          );
        });
      }
      if (fieldValueIsOfType(field, 'GRU')) {
        console.log(
          'GVM backend unset readonly for field with key ' + field.key
        );
        keys.forEach((key) => {
          newFields = fieldReadonlyModify(
            aParamForBackend,
            newFields,
            key,
            false
          );
        });
      }
    });
  }

  if (isRecordValid) {
    console.log('Record OK');

    let message = 'All your backend data UPDATED with success!';
    if (isCheck) {
      message = 'All your backend data CHECKED with success!';
    }

    extraMessages = [
      ...extraMessages,
      {
        text: message + '(' + new Date().toISOString() + ')',
        level: 'INFO',
      },
    ];

    let records = [];
    records[0] = { fields: newFields };

    return {
      fields: newFields,
      ...(isCheck ? {} : { records: records }),
      extraMessages: extraMessages,
      formOpened: isCheck,
    };
  } else {
    console.log('Record KO');

    return {
      extraMessages: extraMessages,
    };
  }
}

export function fieldValueIsOfType(field: any, type: string) {
  let value = JSON.stringify(field.value);

  if (value && value.includes(type)) {
    return true;
  }
}

export function fieldValueModify(
  aParamForBackend: string,
  newFields: any,
  key: string
) {
  if (key == 'country' || key == 'region') {
    newFields[key].value = {
      value: 'FVU',
      description: 'Field value updated',
    };
  } else if (key == 'firstName' || key == 'lastName' || key == 'address') {
    newFields[key].value =
      aParamForBackend.substring(0, 3) +
      (newFields[key].value
        ? newFields[key].value.substring(3, newFields[key].value.lenght)
        : '');
  } else {
    // do nothing
  }
  return newFields;
}

export function fieldReadonlyModify(
  aParamForBackend: string,
  newFields: any,
  key: string,
  readonly: boolean
) {
  if (key != 'country' && key != 'region') {
    newFields[key].readonly = readonly;
  }
  return newFields;
}
