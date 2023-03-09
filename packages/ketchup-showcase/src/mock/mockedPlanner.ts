export const mockedTaskData = {
  columns: [
    {
      name: 'ID',
      title: 'Task identifier',
    },
    {
      name: 'NAME',
      title: 'Task name',
    },
    {
      name: 'START',
      title: 'Task start date',
      obj: {
        t: 'D8',
        p: '*YYMD',
        k: '',
      },
    },
    {
      name: 'END',
      title: 'Task end date',
      obj: {
        t: 'D8',
        p: '*YYMD',
        k: '',
      },
    },
    {
      name: 'SEC_START',
      title: 'Forecast task start date',
      obj: {
        t: 'D8',
        p: '*YYMD',
        k: '',
      },
    },
    {
      name: 'SEC_END',
      title: 'Forecast task end date',
      obj: {
        t: 'D8',
        p: '*YYMD',
        k: '',
      },
    },
  ],
  rows: [
    {
      cells: {
        ID: {
          value: 'G456',
        },
        NAME: {
          value: 'G456',
        },
        START: {
          value: '2022-06-04',
        },
        END: {
          value: '2022-12-04',
        },
        SEC_START: {
          value: '2022-06-04',
        },
        SEC_END: {
          value: '2022-12-04',
        },
      },
    },
  ],
};

export const mockedPhaseData = {
  columns: [
    {
      name: 'ID',
      title: 'Phase identifier',
    },
    {
      name: 'NAME',
      title: 'Phase name',
    },
    {
      name: 'START',
      title: 'Phase start date',
      obj: {
        t: 'D8',
        p: '*YYMD',
        k: '',
      },
    },
    {
      name: 'END',
      title: 'Phase end date',
      obj: {
        t: 'D8',
        p: '*YYMD',
        k: '',
      },
    },
    {
      name: 'SEC_START',
      title: 'Forecast phase start date',
      obj: {
        t: 'D8',
        p: '*YYMD',
        k: '',
      },
    },
    {
      name: 'SEC_END',
      title: 'Forecast phase end date',
      obj: {
        t: 'D8',
        p: '*YYMD',
        k: '',
      },
    },
    {
      name: 'PHASE_COL',
      title: 'Color',
      obj: {
        t: '',
        p: '',
        k: '',
      },
    },
  ],
  rows: [
    {
      cells: {
        ID: {
          value: 'F001',
        },
        NAME: {
          value: 'F001',
        },
        START: {
          value: '2022-07-04',
        },
        END: {
          value: '2022-08-04',
        },
        SEC_START: {
          value: '2022-07-04',
        },
        SEC_END: {
          value: '2022-08-04',
        },
        PHASE_COL: {
          value: '#FF0000',
        },
      },
    },
  ],
};

export const mockedProps = {
  titleMess: 'Titolo',
  taskIdCol: 'ID',
  taskNameCol: 'NAME',
  taskDates: ['START', 'END'],
  taskPrevDates: ['SEC_START', 'SEC_END'],
  taskColumns: ['ID', 'NAME'],
  phaseIdCol: 'ID',
  phaseNameCol: 'NAME',
  phaseDates: ['START', 'END'],
  phasePrevDates: ['SEC_START', 'SEC_END'],
  phaseColorCol: 'PHASE_COL',
};
