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
      let cell =
        detail.actual &&
        detail.actual.cells &&
        detail.actual.cells[detail.field.key];
      if (cell.extra && cell.extra.liveBackendCheck) {
        isToCheck = true;
      } else {
        let field =
          detail.actual &&
          detail.actual.fields &&
          detail.actual.fields[detail.field.key];
        if (field && field.extra && field.extra.liveBackendCheck) {
          isToCheck = true;
        }
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
    detail.extra && detail.extra.operation,
    false,
    detail.isValid,
    detail.field,
    detail.actual.cells,
    detail.action
  );
}

export function fakeCheckBackendLogic(detail: any) {
  return fakeBackendLogic(
    detail.extra && detail.extra.aParamForBackend,
    detail.extra && detail.extra.operation,
    true,
    detail.isValid,
    detail.field,
    detail.actual.cells,
    detail.action
  );
}

export function fakeBackendLogic(
  aParamForBackend: any,
  operation: string,
  isCheck: boolean,
  isFormValid: boolean,
  field: any,
  cells: any,
  action: any
) {
  console.log(
    'Applying fake backend logic with aParamForBackend = ' +
      aParamForBackend +
      ', operation = ' +
      operation +
      ', isCheck = ' +
      isCheck +
      ', isFormValid = ' +
      isFormValid +
      ', field = ' +
      (field ? field.key : 'empty')
  );

  aParamForBackend = aParamForBackend || 'NON';

  // deep copy
  let newCells = JSON.parse(JSON.stringify(cells));
  let newFields: any = {};
  let areFieldsToBeModified = false;
  let areCellsToBeModified = false;

  let isRecordValid = !(isFormValid == false); // also undefined is ok
  let extraMessages: any = [];

  if (newCells) {
    const keys = Object.keys(newCells);
    let cells: any = [];
    keys.forEach((key) => {
      newCells[key].key = key;
      cells.push(newCells[key]);
    });

    cells.forEach((cell: any) => {
      // messages
      let level = null;
      let fieldKey = null;

      if (cellValueIsOfType(cell, 'FEM')) {
        level = 'ERROR';
        fieldKey = cell.key;
      } else if (cellValueIsOfType(cell, 'FWM')) {
        level = 'WARNING';
        fieldKey = cell.key;
      } else if (cellValueIsOfType(cell, 'FIM')) {
        level = 'INFO';
        fieldKey = cell.key;
      } else if (cellValueIsOfType(cell, 'GEM')) {
        level = 'ERROR';
      } else if (cellValueIsOfType(cell, 'GWM')) {
        level = 'WARNING';
      } else if (cellValueIsOfType(cell, 'GIM')) {
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
      if (cellValueIsOfType(cell, 'FVM')) {
        console.log('FVM backend modify of field with key ' + cell.key);
        areCellsToBeModified = true;
        newCells = cellValueModify(aParamForBackend, newCells, cell.key);
      }
      if (cellValueIsOfType(cell, 'GVM')) {
        console.log('GVM backend modify of field with key ' + cell.key);
        areCellsToBeModified = true;
        keys.forEach((key) => {
          newCells = cellValueModify(aParamForBackend, newCells, key);
        });
      }

      // fields
      if (cellValueIsOfType(cell, 'GRS')) {
        console.log('GVM backend set readonly for field with key ' + cell.key);
        areFieldsToBeModified = true;
        keys.forEach((key) => {
          newFields = fieldReadonlyModify(
            aParamForBackend,
            newFields,
            key,
            true
          );
        });
      }
      if (cellValueIsOfType(cell, 'GRU')) {
        console.log(
          'GVM backend unset readonly for field with key ' + cell.key
        );
        areFieldsToBeModified = true;
        keys.forEach((key) => {
          newFields = fieldReadonlyModify(
            aParamForBackend,
            newFields,
            key,
            false
          );
        });
      }

      // conditional server side rule
      if (
        cell &&
        cell.key == 'country' &&
        cell.value &&
        cell.value.value != 'IT'
      ) {
        areFieldsToBeModified = true;
        areCellsToBeModified = true;
        newFields['region'] = {
          config: {
            data: [
              {
                value: 'AN',
                description: 'Any',
              },
            ],
          },
        };
        newCells['region'] = { value: { value: '', description: '' } };
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

    if (operation === 'insert') {
      areCellsToBeModified = true;
    }

    return {
      ...(!isCheck || areCellsToBeModified ? { cells: newCells } : {}),
      ...(areFieldsToBeModified ? { fields: newFields } : {}),
      ...(areFieldsToBeModified ? { diffTypes: ['fields.diff.override'] } : {}),
      isUpdate: !isCheck,
      extraMessages: extraMessages,
    };
  } else {
    console.log('Record KO');

    return {
      extraMessages: extraMessages,
      isUpdate: false,
    };
  }
}

export function cellValueIsOfType(cell: any, type: string) {
  let value = JSON.stringify(cell.value);

  if (value && value.includes(type)) {
    return true;
  }
}

export function cellValueModify(
  aParamForBackend: string,
  newCells: any,
  key: string
) {
  if (key == 'country' || key == 'region') {
    newCells[key].value = {
      value: 'FVU',
      description: 'Field value updated',
    };
  } else if (
    key == 'firstName' ||
    key == 'lastName' ||
    key == 'address' ||
    key == 'aTextField'
  ) {
    newCells[key].value =
      aParamForBackend.substring(0, 3) +
      (newCells[key].value
        ? newCells[key].value.substring(3, newCells[key].value.lenght)
        : '');
  } else {
    // do nothing
  }
  return newCells;
}

export function fieldReadonlyModify(
  aParamForBackend: string,
  newFields: any,
  key: string,
  readonly: boolean
) {
  if (key != 'country' && key != 'region') {
    newFields[key] = {};
    newFields[key].readonly = readonly;
  }
  return newFields;
}
