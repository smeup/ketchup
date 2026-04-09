const defaultData = {
  columns: [
    {
      isEditable: false,
      isKey: false,
      name: 'XXDATA',
      obj: {
        p: '*YYMD',
        t: 'D8',
      },
      title: 'Data',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXORA',
      obj: {
        p: '2',
        t: 'I1',
      },
      title: 'Ora',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXUTE',
      obj: {
        p: '',
        t: 'UP',
      },
      title: 'Utente',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXUTE_£',
      obj: {
        p: '',
        t: 'UP',
      },
      title: 'Utente',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXFON_£',
      obj: {
        p: '*PGM',
        t: 'OJ',
      },
      title: 'Fonte',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXDES',
      objs: [
        {
          p: '',
          t: 'E5',
        },
        {
          p: 'DA',
          t: 'DO',
        },
      ],
      title: 'Riferimento\nFonte',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXAZI',
      title: 'Azione',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXNOT',
      title: 'Descrizione',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXICO',
      obj: {
        p: 'ICO',
        t: 'J4',
      },
      title: 'I',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXFON',
      obj: {
        p: '*PGM',
        t: 'OJ',
      },
      title: 'Fonte',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXTPO',
      obj: {
        p: '',
        t: 'OG',
      },
      title: 'Tipo Oggetto',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXTPO_£',
      obj: {
        p: '',
        t: 'OG',
      },
      title: 'Tipo Oggetto',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXCDO',
      objs: [
        {
          p: '',
          t: 'E5',
        },
        {
          p: 'DA',
          t: 'DO',
        },
      ],
      title: 'Codice Oggetto',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXEXEC',
      title: 'RowExec',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'XXCOL',
      title: 'Colore',
      tooltip: false,
      visible: false,
    },
  ],
  rows: [
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R064G133B074',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'E5',
          decode: ' Riga registrazione',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '06',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '06',
          decode: 'Righe Contabilità',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-10',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
          decode: 'Saccon Laura',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'E5',
          },
          value: '100059920600000',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Inserimento',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'E5',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 2:1',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'E5',
          },
          value: '100059920600000',
          decode: '200059920600000',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'check',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000003',
          decode: 'check',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '18:30:00',
        },
      },
      id: '1',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G255B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '05',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'CASFRA',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '05',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-09',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'CASFRA',
          decode: 'Casetta',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2007484',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Modifica',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 1:1',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2007484',
          decode: 'Fattura/Bolla Ciclo Attivo D3008888',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'csv',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000013',
          decode: 'csv',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '12:00:00',
        },
      },
      id: '2',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G255B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '05',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'CASFRA',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '05',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-09',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'CASFRA',
          decode: 'Casetta',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2007484',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Modifica',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 1:2',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2007484',
          decode: 'Fattura/Bolla Ciclo Attivo D4009999',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'xml',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000011',
          decode: 'xml',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '12:00:00',
        },
      },
      id: '3',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
          decode: 'Saccon',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:1',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
          decode: 'Fattura/Bolla Ciclo Attivo D1000001',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '16:00:00',
        },
      },
      id: '4',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:2',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '16:00:00',
        },
      },
      id: '5',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:3',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '16:00:00',
        },
      },
      id: '6',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:4',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '16:00:00',
        },
      },
      id: '7',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G020B147',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'BERNIC',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'BERNIC',
          decode: 'Nicolò',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000005',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:5',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000005',
          decode: 'Fattura/Bolla Ciclo Attivo D3000005',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '17:00:00',
        },
      },
      id: '8',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G020B147',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'BUFSIL',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'BUFSIL',
          decode: 'Silvio',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000006',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:6',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000006',
          decode: 'Fattura/Bolla Ciclo Attivo D4000006',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '17:30:00',
        },
      },
      id: '9',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R064G133B074',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'E5',
          decode: ' Riga registrazione',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '04',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'FOSLUC',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '04',
          decode: 'Righe Contabilità',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-11',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'FOSLUC',
          decode: 'Foscili',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'E5',
          },
          value: '000000000000001',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Cancella',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'E5',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 3:1',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          cssClass: 'strong-text',
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'E5',
          },
          value: '000000000000001',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'xml',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000011',
          decode: 'xml',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '15:00:00',
        },
      },
      id: '10',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
          decode: 'Saccon',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:1',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
          decode: 'Fattura/Bolla Ciclo Attivo D1000001',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '16:00:00',
        },
      },
      id: '11',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:2',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '16:30:00',
        },
      },
      id: '12',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:3',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '17:00:00',
        },
      },
      id: '13',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:4',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '17:30:00',
        },
      },
      id: '14',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:5',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '18:00:00',
        },
      },
      id: '15',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:6',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '18:30:00',
        },
      },
      id: '16',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:7',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '19:00:00',
        },
      },
      id: '17',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
          decode: 'Saccon',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:1',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
          decode: 'Fattura/Bolla Ciclo Attivo D1000001',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '10:55:00',
        },
      },
      id: '18',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-13',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:2',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '10:55:00',
        },
      },
      id: '19',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-14',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:3',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '10:55:00',
        },
      },
      id: '20',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-15',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:4',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '10:55:00',
        },
      },
      id: '21',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-16',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:5',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '10:55:00',
        },
      },
      id: '22',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-17',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:6',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '10:55:00',
        },
      },
      id: '23',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-18',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:7',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '10:55:00',
        },
      },
      id: '24',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
          decode: 'Saccon',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:1',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
          decode: 'Fattura/Bolla Ciclo Attivo D1000001',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '15:59:00',
        },
      },
      id: '25',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:2',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '15:59:00',
        },
      },
      id: '26',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:3',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '15:59:00',
        },
      },
      id: '27',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:4',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '19:31:00',
        },
      },
      id: '28',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:5',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '19:31:00',
        },
      },
      id: '29',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:6',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '19:31:00',
        },
      },
      id: '30',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:7',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '19:31:00',
        },
      },
      id: '31',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
          decode: 'Saccon',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:1',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
          decode: 'Fattura/Bolla Ciclo Attivo D1000001',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '22:57:00',
        },
      },
      id: '32',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:2',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '22:57:00',
        },
      },
      id: '33',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:3',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '22:57:00',
        },
      },
      id: '34',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:4',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '22:57:00',
        },
      },
      id: '35',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-02',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:5',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '22:57:00',
        },
      },
      id: '36',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-02',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:6',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '22:57:00',
        },
      },
      id: '37',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-02',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:7',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '22:57:00',
        },
      },
      id: '38',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
          decode: 'Saccon',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:1',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
          decode: 'Fattura/Bolla Ciclo Attivo D1000001',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '15:59:00',
        },
      },
      id: '39',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:2',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '15:58:00',
        },
      },
      id: '40',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:3',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '15:57:00',
        },
      },
      id: '41',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:4',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '15:56:00',
        },
      },
      id: '42',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:5',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '15:55:00',
        },
      },
      id: '43',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:6',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '15:54:00',
        },
      },
      id: '44',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2020-06-12',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:7',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '15:53:00',
        },
      },
      id: '45',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
          decode: 'Saccon',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:1',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
          decode: 'Fattura/Bolla Ciclo Attivo D1000001',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:48:00',
        },
      },
      id: '46',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-02',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:2',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:48:00',
        },
      },
      id: '47',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-03',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:3',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:48:00',
        },
      },
      id: '48',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-04',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:4',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:48:00',
        },
      },
      id: '49',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-05',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:5',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:48:00',
        },
      },
      id: '50',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-06',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:6',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:48:00',
        },
      },
      id: '51',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2021-01-07',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:7',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:48:00',
        },
      },
      id: '52',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '1999-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SACLAU',
          decode: 'Saccon',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:1',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D1000001',
          decode: 'Fattura/Bolla Ciclo Attivo D1000001',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:59:00',
        },
      },
      id: '53',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '1999-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:2',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:59:00',
        },
      },
      id: '54',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '1999-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:3',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:59:00',
        },
      },
      id: '55',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '1999-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:4',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:59:00',
        },
      },
      id: '56',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '1999-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'MOROLE',
          decode: 'Olesea',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:5',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D4000004',
          decode: 'Fattura/Bolla Ciclo Attivo D4000004',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:59:00',
        },
      },
      id: '57',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '1999-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'DELGIO',
          decode: 'Giovanni',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:6',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D3000003',
          decode: 'Fattura/Bolla Ciclo Attivo D3000003',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:59:00',
        },
      },
      id: '58',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        XXCOL: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'R255G000B000',
        },
        'XXTPO_£': {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
          decode: ' C.Attivo',
        },
        XXFON: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
        },
        XXUTE: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
        },
        'XXFON_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '*PGM',
            t: 'OJ',
          },
          value: '03',
          decode: 'Righe Documento',
        },
        XXDATA: {
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '1999-01-01',
        },
        'XXUTE_£': {
          data: {
            size: 70,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 70,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'UP',
          },
          value: 'SCIMAM',
          decode: 'Sciola',
        },
        XXCDO: {
          cssClass: 'strong-text',
          data: {
            size: 15,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
        },
        XXAZI: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'Visualizza',
        },
        XXTPO: {
          cssClass: 'strong-text',
          data: {
            size: 12,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 12,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OG',
          },
          value: 'DODA',
        },
        XXNOT: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'XML ORDER 4:7',
        },
        XXEXEC: {
          data: {
            size: 999,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 999,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: ' F(EXD;*SCO;) 1(CN;COL;[XXUTE])',
        },
        XXDES: {
          data: {
            size: 256,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 256,
          },
          isEditable: false,
          obj: {
            p: 'DA',
            t: 'DO',
          },
          value: 'D2000002',
          decode: 'Fattura/Bolla Ciclo Attivo D2000002',
        },
        XXICO: {
          cssClass: 'strong-text',
          data: {
            sizeX: '18px',
            size: 1,
            resource: 'close-circle',
            helperEnabled: false,
            hiddenCounter: true,
            sizeY: '18px',
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
          value: 'VO;COD_VER;000002',
          decode: 'close-circle',
        },
        XXORA: {
          cssClass: 'strong-text',
          data: {
            size: 10,
            helperEnabled: false,
            hiddenCounter: true,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '2',
            t: 'I1',
          },
          value: '23:59:00',
        },
      },
      id: '59',
      object: '',
      readOnly: true,
    },
  ],
};

export const mockedProps = {
  dateColumn: 'XXDATA',
  sort: [
    {
      column: 'XXDATA',
      sortMode: 'A',
    },
    {
      column: 'XXORA',
      sortMode: 'D',
    },
  ],
  timeColumn: 'XXORA',
  data: defaultData,
};
