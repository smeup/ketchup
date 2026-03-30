export const defaultData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Photo',
      obj: {
        t: 'J4',
        p: 'IMG',
      },
    },
    {
      name: 'FLD2',
      title: 'Name',
    },
    {
      name: 'FLD3',
      title: 'Ordered quantity',
      obj: {
        t: 'NR',
        p: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Delivery date',
    },
    {
      name: 'FLD5',
      title: 'HTML',
    },
  ],
  rows: [
    {
      id: '1',
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'images/blueflowers.JPG',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'AR;ART;Blue Flowers',
          decode: 'images/blueflowers.JPG',
        },
        FLD2: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Blue Flowers',
          decode: 'Blue flowers',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '3',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2020-03-01',
        },
      },
    },
    {
      id: '2',
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'images/woodheart.JPG',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'AR;ART;Wooden heart',
          decode: 'images/woodheart.JPG',
        },
        FLD2: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Wooden heart',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '800',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2020-02-05',
        },
      },
    },
    {
      id: '3',
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'images/purpleflowers.JPG',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'AR;ART;Purple flowers',
          decode: 'images/purpleflowers.JPG',
        },
        FLD2: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Purple flowers',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '12',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2021-12-31',
        },
      },
    },
    {
      id: '4',
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'images/redflowers.JPG',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'AR;ART;Red flowers',
          decode: 'images/redflowers.JPG',
        },
        FLD2: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Red flowers',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '521',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2020-06-06',
        },
      },
    },
  ],
};

export const j4btnData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Image',
      obj: {
        t: 'J4',
        p: 'IMG',
      },
    },
    {
      name: 'FLD2',
      title: 'Name',
    },
    {
      name: 'FLD3',
      title: 'Number',
      obj: {
        t: 'NR',
        p: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Button',
      obj: {
        t: 'J4',
        p: 'BTN',
      },
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'images/Florence.jpg',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'AR;ART;Florence',
          decode: 'images/Florence.jpg',
        },
        FLD2: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Florence',
        },
        FLD3: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Hotel Red',
        },
        FLD4: {
          obj: {
            t: 'J4',
            p: 'BTN',
          },
          data: {
            label: 'Book',
            icon: 'pencil',
          },
          value: 'VO;COD_VER;000001;Prenota;F(EXD;*SCO;) 1(AR;ART;Florence)',
          decode: 'Book',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'images/Parme.JPG',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'AR;ART;Parme',
          decode: 'images/Parme.JPG',
        },
        FLD2: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Parme',
        },
        FLD3: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Hotel Blue',
        },
        FLD4: {
          obj: {
            t: 'J4',
            p: 'BTN',
          },
          data: {
            icon: 'pencil',
            label: 'Book',
            showtext: true,
          },
          value: 'VO;COD_VER;000001;Prenota;F(EXD;*SCO;) 1(AR;ART;Parme)',
          decode: 'Book',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'images/Milan.jpg',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'AR;ART;Milan',
          decode: 'images/Milan.jpg',
        },
        FLD2: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Milan',
        },
        FLD3: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Hotel Green',
        },
        FLD4: {
          obj: {
            t: 'J4',
            p: 'BTN',
          },
          data: {
            label: 'Book',
            icon: 'pencil',
            showtext: true,
          },
          value: 'VO;COD_VER;000001;Prenota;F(EXD;*SCO;) 1(AR;ART;Milan)',
          decode: 'Book',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'images/Rome.jpg',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'AR;ART;Rome',
          decode: 'images/Rome.jpg',
        },
        FLD2: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Rome',
        },
        FLD3: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Hotel Yellow',
        },
        FLD4: {
          obj: {
            t: 'J4',
            p: 'BTN',
          },
          data: {
            label: 'Book',
            icon: 'pencil',
          },
          value: 'VO;COD_VER;000001;Prenota;F(EXD;*SCO;) 1(AR;ART;Rome)',
          decode: 'Book',
        },
      },
    },
  ],
};

export const v2sinoData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Description',
    },
    {
      name: 'FLD2',
      title: 'SiNo',
      obj: {
        t: 'V2',
        p: 'SI/NO',
      },
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Not selected',
        },
        FLD2: {
          obj: {
            t: 'V2',
            p: 'SI/NO',
          },
          value: '',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Selected',
        },
        FLD2: {
          obj: {
            t: 'V2',
            p: 'SI/NO',
          },
          value: '1',
        },
      },
    },
  ],
};

export const v2radioData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Description',
    },
    {
      name: 'FLD2',
      title: 'Radio',
      obj: {
        t: 'V2',
        p: 'RADIO',
      },
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Not selected',
        },
        FLD2: {
          obj: {
            t: 'V2',
            p: 'RADIO',
          },
          value: '',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Selected',
        },
        FLD2: {
          obj: {
            t: 'V2',
            p: 'RADIO',
          },
          value: '1',
        },
      },
    },
  ],
};

export const j1pwdData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Description',
    },
    {
      name: 'FLD2',
      title: 'Password',
      obj: {
        t: 'J1',
        p: 'PWD',
      },
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Empty password',
        },
        FLD2: {
          obj: {
            t: 'J1',
            p: 'PWD',
          },
          value: '',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'A password',
        },
        FLD2: {
          obj: {
            t: 'J1',
            p: 'PWD',
          },
          value: 'sample password',
        },
      },
    },
  ],
};

export const imgBadgeData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Image',
      obj: {
        t: 'J4',
        p: 'IMG',
      },
    },
    {
      name: 'FLD2',
      title: 'Name',
    },
    {
      name: 'FLD3',
      title: 'Number',
      obj: {
        t: 'NR',
        p: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Date',
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'images/purpleflowers.JPG',
            sizeX: '64px',
            sizeY: '64px',
            badgeData: [
              {
                text: '12',
                className: 'top-right',
              },
            ],
          },
          value: 'AR;ART;Purple Flowers',
          decode: 'images/purpleflowers.JPG',
        },
        FLD2: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Purple Flowers',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '12',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2020-12-31',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'images/Milan.jpg',
            sizeX: '64px',
            sizeY: '64px',
            badgeData: [
              {
                imageData: {
                  resource: 'account',
                },
                className: 'bottom-right',
              },
            ],
          },
          value: 'AR;ART;Milan',
          decode: 'images/Milan.jpg',
        },
        FLD2: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Milan',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '1',
        },
        FLD4: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Guest',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'images/Parme.JPG',
            sizeX: '64px',
            sizeY: '64px',
            badgeData: [
              {
                text: '33',
                className: 'top-right',
              },
              {
                imageData: {
                  resource: 'widgets',
                },
                className: 'bottom-right',
              },
            ],
          },
          value: 'AR;ART;Parme',
          decode: 'images/Parme.JPG',
        },
        FLD2: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'Shopping center',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '16',
        },
        FLD4: {
          obj: {
            t: 'N',
            p: '',
          },
          value: '43100',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          shape: 'IMG',
          data: {
            resource: 'https://placehold.co/64?text=SC',
            sizeX: '32px',
            sizeY: '32px',
            badgeData: [
              {
                text: '23',
                className: 'top-left',
              },
              {
                imageData: {
                  resource: 'account',
                },
                className: 'bottom-left',
              },
            ],
          },
          value: 'SANCOS',
          decode: 'https://placehold.co/64?text=SC',
        },
        FLD2: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'SANCOS',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '187.59',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2018-01-04',
        },
      },
    },
  ],
};

export const pgbData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Image',
      obj: {
        t: 'J4',
        p: 'IMG',
      },
    },
    {
      name: 'FLD2',
      title: 'Todo',
    },
    {
      name: 'FLD3',
      title: 'Progress',
      obj: {
        t: 'J4',
        p: 'PGB',
      },
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=SC',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;SANCOS',
          decode: 'https://placehold.co/64?text=SC',
        },
        FLD2: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Todo #1',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'PGB',
          },
          data: {
            value: '80',
          },
          value: '80',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=CF',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;CASFRA',
          decode: 'https://placehold.co/64?text=CF',
        },
        FLD2: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Todo #2',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'PGB',
          },
          data: {
            label: 'Done',
            value: '100',
          },
          value: '100\\*LAB;Done',
          decode: '100',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=DG',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;DELGIO',
          decode: 'https://placehold.co/64?text=DG',
        },
        FLD2: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Todo #3',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'PGB',
          },
          data: {
            hideLabel: true,
            value: '75',
          },
          value: '75',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=PF',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;PARFRA',
          decode: 'https://placehold.co/64?text=PF',
        },
        FLD2: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Todo #4',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'PGB',
          },
          data: {
            customStyle:
              ':host{--kup-disabled-background-color: black; --kup-primary-color: green}',
            backgroundColor: 'black',
            value: '33',
          },
          value: '#C01BAF;33',
          decode: '33',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=PF',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;PARFRA',
          decode: 'https://placehold.co/64?text=PF',
        },
        FLD2: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Todo #5',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'PGB',
          },
          data: {
            value: '45',
            customStyle:
              ':host{--kup-disabled-background-color: magenta; --kup-primary-color: yellow}',
          },
          value: '#C01BAF;45',
          decode: '45',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=PF',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;PARFRA',
          decode: 'https://placehold.co/64?text=PF',
        },
        FLD2: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Todo #6',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'PGB',
          },
          data: {
            value: '70',
          },
          value: '#C01BAF;70',
          decode: '70',
        },
      },
    },
  ],
};

export const boxBadgeData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Image',
      obj: {
        t: 'J4',
        p: 'IMG',
      },
    },
    {
      name: 'FLD2',
      title: 'Name',
    },
    {
      name: 'FLD3',
      title: 'Number',
      obj: {
        t: 'NR',
        p: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Date',
    },
  ],
  rows: [
    {
      id: '1',
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=CF',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;CASFRA',
          decode: 'https://placehold.co/64?text=CF',
        },
        FLD2: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'CASFRA',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '100.60',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2018-01-01',
        },
      },
      badgeData: [
        {
          text: '1',
        },
      ],
    },
    {
      id: '2',
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=PF',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;PARFRA',
          decode: 'https://placehold.co/64?text=PF',
        },
        FLD2: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'PARFRA',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '145.22',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2018-01-02',
        },
      },
      badgeData: [
        {
          imageData: { resource: 'account' },
          className: 'top-left',
        },
      ],
    },
    {
      id: '3',
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=DG',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;DELGIO',
          decode: 'https://placehold.co/64?text=DG',
        },
        FLD2: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'DELGIO',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '221.23',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2018-01-03',
        },
      },
      badgeData: [
        {
          text: 'long teeeeeeeeeeeeext',
        },
      ],
    },
  ],
};

export const shapeData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Image',
      obj: {
        t: 'J4',
        p: 'IMG',
      },
    },
    {
      name: 'FLD2',
      title: 'Todo',
    },
    {
      name: 'FLD3',
      title: 'Progress',
      obj: {
        t: 'NR',
        p: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Html',
    },
  ],
  rows: [
    {
      id: '1',
      cells: {
        FLD1: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'PARFRA',
          data: {
            resource: 'https://placehold.co/64?text=CUSTOM',
            badgeData: [
              {
                imageData: {
                  resource: 'account',
                },
                className: 'bottom-right',
              },
            ],
            width: 20,
            height: 20,
          },
          decode: 'https://placehold.co/64?text=CUSTOM',
        },
        FLD2: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Todo #1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: 'R200G100B002;89\\*LAB;Done',
        },
      },
      layout: {
        sections: [
          {
            horizontal: true,
            sections: [
              {
                dim: '10%',
                content: [
                  {
                    column: 'FLD1',
                    shape: 'IMG',
                  },
                ],
              },
              {
                sections: [
                  { content: [{ column: 'FLD2' }] },
                  {
                    content: [
                      {
                        column: 'FLD3',
                        shape: 'PGB',
                        data: {
                          value: 100,
                          label: 'Done',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      id: '2',
      cells: {
        FLD1: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'CASFRA',
          data: {
            badgeData: [
              {
                imageData: {
                  resource: 'account',
                },
                className: 'top-left',
              },
            ],
          },
          decode: '',
        },
        FLD2: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Todo #2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '50',
        },
      },
    },
    {
      id: '3',
      cells: {
        FLD1: {
          obj: {
            t: 'AR',
            p: 'ART',
          },
          value: 'myhtml',
          decode:
            '<div>HTML VALIDO con <i>corsivo</i> e <b>grassetto</b> e immagine <img src="https://picsum.photos/100/50"/></div>  <div>HTML NON VALIDO con <i>corsivo e <b>grassetto</b><div>',
        },
      },
      layout: {
        sections: [
          {
            horizontal: true,
            dim: '100%',
            content: [
              {
                column: 'FLD1',
                shape: 'EDT',
              },
            ],
          },
        ],
      },
    },
  ],
};

export function createData(rows: number) {
  const data: any = {
    columns: [
      {
        name: 'FLD1',
        title: 'Image',
        obj: {
          t: 'J4',
          p: 'IMG',
        },
      },
      {
        name: 'FLD2',
        title: 'Name',
      },
      {
        name: 'FLD3',
        title: 'Number',
        obj: {
          t: 'NR',
          p: '',
        },
      },
      {
        name: 'FLD4',
        title: 'Date',
      },
    ],
    rows: [],
  };

  while (rows > 0) {
    rows--;

    data.rows.push({
      id: '1',
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=CF',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;CASFRA',
          decode: 'https://placehold.co/64?text=CF',
        },
        FLD2: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'CASFRA',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '100.60',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2018-01-01',
        },
      },
    });

    data.rows.push({
      id: '2',
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=PF',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;PARFRA',
          decode: 'https://placehold.co/64?text=PF',
        },
        FLD2: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'PARFRA',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '145.22',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2018-01-02',
        },
      },
    });

    data.rows.push({
      id: '3',
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=DG',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;DELGIO',
          decode: 'https://placehold.co/64?text=DG',
        },
        FLD2: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'DELGIO',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '221.23',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2018-01-03',
        },
      },
    });

    data.rows.push({
      id: '4',
      cells: {
        FLD1: {
          obj: {
            t: 'J4',
            p: 'IMG',
          },
          data: {
            resource: 'https://placehold.co/64?text=SC',
            sizeX: '64px',
            sizeY: '64px',
          },
          value: 'CN;COL;SANCOS',
          decode: 'https://placehold.co/64?text=SC',
        },
        FLD2: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'SANCOS',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '187.59',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2022-01-04',
        },
      },
    });
  }

  return data;
}
