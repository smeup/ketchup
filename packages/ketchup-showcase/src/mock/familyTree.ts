export const layoutData = {
  columns: [
    {
      isKey: false,
      name: 'A',
      obj: {
        p: 'IMG',
        t: 'J4',
      },
      title: 'Immagine Persona',
      tooltip: false,
    },
    {
      icon: 'account',
      isKey: false,
      name: 'B',
      obj: {
        p: 'COL',
        t: 'CN',
      },
      title: 'Nome',
      tooltip: true,
    },
    {
      icon: 'account',
      isKey: false,
      name: 'C',
      obj: {
        p: 'COL',
        t: 'CN',
      },
      title: 'Codice',
      tooltip: false,
    },
    {
      isKey: false,
      name: 'D',
      obj: {
        p: '',
        t: '**',
      },
      title: 'Mail',
      tooltip: false,
    },
    {
      isKey: false,
      name: 'E',
      obj: {
        p: '',
        t: '**',
      },
      title: 'Telefono',
      tooltip: false,
    },
    {
      isKey: false,
      name: 'F',
      obj: {
        p: '',
        t: '**',
      },
      title: 'Ruolo',
      tooltip: false,
    },
  ],
  rows: [
    {
      cells: {
        A: {
          cssClass: 'strong-text',
          data: {
            sizeX: '50px',
            resource: 'images/faces/john.jpg',
            sizeY: '60px',
          },
          isEditable: false,
          obj: {
            p: 'IMG',
            t: 'J4',
          },
          value: 'CN;COL;SANCOS',
          decode: 'images/faces/john.jpg',
        },
        B: {
          cssClass: ' top-right-indicator',
          isEditable: false,
          obj: {
            p: 'COL',
            t: 'CN',
          },
          value: 'SANCOS',
          decode: 'John',
        },
        C: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            p: 'COL',
            t: 'CN',
          },
          value: 'SANCOS',
        },
        D: {
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: 'john@somecompany.com',
        },
        E: {
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '39390000',
        },
        F: {
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: 'CTO',
        },
      },
      children: [
        {
          cells: {
            A: {
              cssClass: 'strong-text',
              data: {
                sizeX: '50px',
                resource: 'images/faces/james.jpg',
                sizeY: '60px',
              },
              isEditable: false,
              obj: {
                p: 'IMG',
                t: 'J4',
              },
              shape: 'Img',
              value: 'CN;COL;ARRSTE',
              decode: 'images/faces/james.jpg',
            },
            B: {
              cssClass: ' top-right-indicator',
              isEditable: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              value: 'ARRSTE',
              decode: 'James',
            },
            C: {
              cssClass: 'strong-text',
              isEditable: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              value: 'ARRSTE',
            },
            D: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: 'james@somecompany.com',
            },
            E: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: '39390000',
            },
            F: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: 'Team leader',
            },
          },
          children: [
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/clara.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;BONMAT',
                  },
                  shape: 'Img',
                  value: 'images/faces/clara.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'BONMAT',
                  },
                  value: 'Clara',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'BONMAT',
                  },
                  value: 'BONMAT',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'clara@somecompany.com',
                  },
                  value: 'clara@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,0,0',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'BONMAT',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/fiona.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;ZAMCHI',
                  },
                  shape: 'Img',
                  value: 'images/faces/fiona.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'ZAMCHI',
                  },
                  value: 'Fiona',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'ZAMCHI',
                  },
                  value: 'ZAMCHI',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'fiona@somecompany.com',
                  },
                  value: 'fiona@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,0,1',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'ZAMCHI',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/donald.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;FEIFAB',
                  },
                  shape: 'Img',
                  value: 'images/faces/donald.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'FEIFAB',
                  },
                  value: 'Donald',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'FEIFAB',
                  },
                  value: 'FEIFAB',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'donald@somecompany.com',
                  },
                  value: 'donald@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,0,2',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'FEIFAB',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/max.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;GOBMAS',
                  },
                  shape: 'Img',
                  value: 'images/faces/max.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'GOBMAS',
                  },
                  value: 'Max',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'GOBMAS',
                  },
                  value: 'GOBMAS',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'max@somecompany.com',
                  },
                  value: 'max@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,0,3',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'GOBMAS',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/linda.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;FORDAR',
                  },
                  shape: 'Img',
                  value: 'images/faces/linda.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'FORDAR',
                  },
                  value: 'Linda',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'FORDAR',
                  },
                  value: 'FORDAR',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'linda@somecompany.com',
                  },
                  value: 'linda@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,0,4',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'FORDAR',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/mario.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;SENLUI',
                  },
                  shape: 'Img',
                  value: 'images/faces/mario.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'SENLUI',
                  },
                  value: 'Mario',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'SENLUI',
                  },
                  value: 'SENLUI',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'mario@somecompany.com',
                  },
                  value: 'mario@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,0,5',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'SENLUI',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/shawn.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;BUSSTE',
                  },
                  shape: 'Img',
                  value: 'images/faces/shawn.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'BUSSTE',
                  },
                  value: 'Shawn',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'BUSSTE',
                  },
                  value: 'BUSSTE',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'shawn@somecompany.com',
                  },
                  value: 'shawn@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,0,6',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'BUSSTE',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/cynthia.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;SABMIC',
                  },
                  shape: 'Img',
                  value: 'images/faces/cynthia.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'SABMIC',
                  },
                  value: 'Cynthia',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'SABMIC',
                  },
                  value: 'SABMIC',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'cynthia@somecompany.com',
                  },
                  value: 'cynthia@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,0,7',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'SABMIC',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
          ],
          disabled: false,
          expandable: true,
          id: '0,0',
          isExpanded: false,
          obj: {
            p: 'COL',
            t: 'CN',
          },
          options: true,
          style: {},
          value: 'ARRSTE',
          isStaff: false,
          layout: {
            horizontal: false,
            sections: [
              {
                horizontal: true,
                sections: [
                  {
                    content: [
                      {
                        value: '',
                      },
                    ],
                    dim: '45%',
                    horizontal: false,
                  },
                  {
                    content: [
                      {
                        column: '*TREECOL',
                      },
                    ],
                    horizontal: false,
                  },
                  {
                    content: [
                      {
                        value: '',
                      },
                    ],
                    dim: '33%',
                    horizontal: false,
                  },
                ],
              },
              {
                horizontal: true,
                sections: [
                  {
                    content: [
                      {
                        column: 'A',
                      },
                    ],
                    dim: '30%',
                    horizontal: false,
                  },
                  {
                    dim: '70%',
                    horizontal: false,
                    sections: [
                      {
                        content: [
                          {
                            column: 'B',
                          },
                        ],
                        horizontal: false,
                        style: {
                          'font-weight': 'bold',
                        },
                      },
                      {
                        content: [
                          {
                            column: 'D',
                          },
                        ],
                        horizontal: false,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          decode: 'Team 1',
        },
        {
          cells: {
            A: {
              cssClass: 'strong-text',
              data: {
                sizeX: '50px',
                resource: 'images/faces/monique.jpg',
                sizeY: '60px',
              },
              isEditable: false,
              obj: {
                p: 'IMG',
                t: 'J4',
              },
              shape: 'Img',
              value: 'CN;COL;DELGIO',
              decode: 'images/faces/monique.jpg',
            },
            B: {
              cssClass: ' top-right-indicator',
              isEditable: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              value: 'DELGIO',
              decode: 'Monique',
            },
            C: {
              cssClass: 'strong-text',
              isEditable: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              value: 'DELGIO',
            },
            D: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: 'monique@somecompany.com',
            },
            E: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: '39390000',
            },
            F: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: 'Team leader',
            },
          },
          children: [
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/carmine.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;VERANA',
                  },
                  shape: 'Img',
                  value: 'images/faces/carmine.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'VERANA',
                  },
                  value: 'Carmine',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'VERANA',
                  },
                  value: 'VERANA',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'carmine@somecompany.com',
                  },
                  value: 'carmine@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,1,0',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'VERANA',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/frank.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;SANBRU',
                  },
                  shape: 'Img',
                  value: 'images/faces/frank.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'SANBRU',
                  },
                  value: 'Frank',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'SANBRU',
                  },
                  value: 'SANBRU',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'frank@somecompany.com',
                  },
                  value: 'frank@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,1,1',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'SANBRU',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/arthur.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;FOSLUC',
                  },
                  shape: 'Img',
                  value: 'images/faces/arthur.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'FOSLUC',
                  },
                  value: 'Arthur',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'FOSLUC',
                  },
                  value: 'FOSLUC',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'arthur@somecompany.com',
                  },
                  value: 'arthur@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,1,2',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'FOSLUC',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/takashi.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;URRAZI',
                  },
                  shape: 'Img',
                  value: 'images/faces/takashi.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'URRAZI',
                  },
                  value: 'Takashi',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'URRAZI',
                  },
                  value: 'URRAZI',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'takashi@somecompany.com',
                  },
                  value: 'takashi@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,1,3',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'URRAZI',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/serena.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;PASCAR',
                  },
                  shape: 'Img',
                  value: 'images/faces/serena.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'PASCAR',
                  },
                  value: 'Serena',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'PASCAR',
                  },
                  value: 'PASCAR',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'serena@somecompany.com',
                  },
                  value: 'serena@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,1,4',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'PASCAR',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/lucretia.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;VERFRA',
                  },
                  shape: 'Img',
                  value: 'images/faces/lucretia.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'VERFRA',
                  },
                  value: 'Lucretia',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'VERFRA',
                  },
                  value: 'VERFRA',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'lucretia@somecompany.com',
                  },
                  value: 'lucretia@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,1,5',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'VERFRA',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/zlatan.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;GIAGIU',
                  },
                  shape: 'Img',
                  value: 'images/faces/zlatan.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'GIAGIU',
                  },
                  value: 'Zlatan',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'GIAGIU',
                  },
                  value: 'GIAGIU',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'zlatan@somecompany.com',
                  },
                  value: 'zlatan@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,1,6',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'GIAGIU',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/peter.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;ALQMAR',
                  },
                  shape: 'Img',
                  value: 'images/faces/peter.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'ALQMAR',
                  },
                  value: 'Peter',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'ALQMAR',
                  },
                  value: 'ALQMAR',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'peter@somecompany.com',
                  },
                  value: 'peter@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,1,7',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'ALQMAR',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
          ],
          disabled: false,
          expandable: true,
          id: '0,1',
          isExpanded: false,
          obj: {
            p: 'COL',
            t: 'CN',
          },
          options: true,
          style: {},
          value: 'DELGIO',
          isStaff: false,
          layout: {
            horizontal: false,
            sections: [
              {
                horizontal: true,
                sections: [
                  {
                    content: [
                      {
                        value: '',
                      },
                    ],
                    dim: '45%',
                    horizontal: false,
                  },
                  {
                    content: [
                      {
                        column: '*TREECOL',
                      },
                    ],
                    horizontal: false,
                  },
                  {
                    content: [
                      {
                        value: '',
                      },
                    ],
                    dim: '33%',
                    horizontal: false,
                  },
                ],
              },
              {
                horizontal: true,
                sections: [
                  {
                    content: [
                      {
                        column: 'A',
                      },
                    ],
                    dim: '30%',
                    horizontal: false,
                  },
                  {
                    dim: '70%',
                    horizontal: false,
                    sections: [
                      {
                        content: [
                          {
                            column: 'B',
                          },
                        ],
                        horizontal: false,
                        style: {
                          'font-weight': 'bold',
                        },
                      },
                      {
                        content: [
                          {
                            column: 'D',
                          },
                        ],
                        horizontal: false,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          decode: 'Team 2',
        },
        {
          cells: {
            A: {
              cssClass: 'strong-text',
              data: {
                sizeX: '50px',
                resource: 'images/faces/jane.jpg',
                sizeY: '60px',
              },
              isEditable: false,
              obj: {
                p: 'IMG',
                t: 'J4',
              },
              shape: 'Img',
              value: 'CN;COL;BENMAR',
              decode: 'images/faces/jane.jpg',
            },
            B: {
              cssClass: ' top-right-indicator',
              isEditable: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              value: 'BENMAR',
              decode: 'Jane',
            },
            C: {
              cssClass: 'strong-text',
              isEditable: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              value: 'BENMAR',
            },
            D: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: 'jane@somecompany.com',
            },
            E: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: '39390000',
            },
            F: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: 'Team leader',
            },
          },
          children: [
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/logan.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;LANMAM',
                  },
                  shape: 'Img',
                  value: 'images/faces/logan.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'LANMAM',
                  },
                  value: 'Logan',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'LANMAM',
                  },
                  value: 'LANMAM',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'logan@somecompany.com',
                  },
                  value: 'logan@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,2,0',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'LANMAM',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/stewie.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;BERNIC',
                  },
                  shape: 'Img',
                  value: 'images/faces/stewie.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'BERNIC',
                  },
                  value: 'Stewie',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'BERNIC',
                  },
                  value: 'BERNIC',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'stewie@somecompany.com',
                  },
                  value: 'stewie@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,2,1',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'BERNIC',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/brian.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;BUSFIO',
                  },
                  shape: 'Img',
                  value: 'images/faces/brian.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'BUSFIO',
                  },
                  value: 'Brian',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'BUSFIO',
                  },
                  value: 'BUSFIO',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'brian@somecompany.com',
                  },
                  value: 'brian@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,2,2',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'BUSFIO',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/lois.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;LANSTS',
                  },
                  shape: 'Img',
                  value: 'images/faces/lois.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'LANMAM',
                  },
                  value: 'Lois',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'LANMAM',
                  },
                  value: 'LANMAM',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'lois@somecompany.com',
                  },
                  value: 'lois@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,2,3',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'LANSTS',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
          ],
          disabled: false,
          expandable: true,
          id: '0,2',
          isExpanded: false,
          obj: {
            p: 'COL',
            t: 'CN',
          },
          options: true,
          style: {},
          value: 'BENMAR',
          isStaff: false,
          layout: {
            horizontal: false,
            sections: [
              {
                horizontal: true,
                sections: [
                  {
                    content: [
                      {
                        value: '',
                      },
                    ],
                    dim: '45%',
                    horizontal: false,
                  },
                  {
                    content: [
                      {
                        column: '*TREECOL',
                      },
                    ],
                    horizontal: false,
                  },
                  {
                    content: [
                      {
                        value: '',
                      },
                    ],
                    dim: '33%',
                    horizontal: false,
                  },
                ],
              },
              {
                horizontal: true,
                sections: [
                  {
                    content: [
                      {
                        column: 'A',
                      },
                    ],
                    dim: '30%',
                    horizontal: false,
                  },
                  {
                    dim: '70%',
                    horizontal: false,
                    sections: [
                      {
                        content: [
                          {
                            column: 'B',
                          },
                        ],
                        horizontal: false,
                        style: {
                          'font-weight': 'bold',
                        },
                      },
                      {
                        content: [
                          {
                            column: 'D',
                          },
                        ],
                        horizontal: false,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          decode: 'Team 3',
        },
        {
          cells: {
            A: {
              cssClass: 'strong-text',
              data: {
                sizeX: '50px',
                resource: 'images/faces/ken.jpg',
                sizeY: '60px',
              },
              isEditable: false,
              obj: {
                p: 'IMG',
                t: 'J4',
              },
              shape: 'Img',
              value: 'CN;COL;MAEOLI',
              decode: 'images/faces/ken.jpg',
            },
            B: {
              cssClass: ' top-right-indicator',
              isEditable: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              value: 'MAEOLI',
              decode: 'Ken',
            },
            C: {
              cssClass: 'strong-text',
              isEditable: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              value: 'MAEOLI',
            },
            D: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: 'ken@somecompany.com',
            },
            E: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: '39390000',
            },
            F: {
              isEditable: false,
              obj: {
                p: '',
                t: '**',
              },
              value: 'Team leader',
            },
          },
          children: [
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/ryu.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;MOSPAO',
                  },
                  shape: 'Img',
                  value: 'images/faces/ryu.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'MOSPAO',
                  },
                  value: 'Ryu',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'MOSPAO',
                  },
                  value: 'MOSPAO',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'ryu@somecompany.com',
                  },
                  value: 'ryu@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,3,0',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'MOSPAO',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/mary.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;BONMAR',
                  },
                  shape: 'Img',
                  value: 'images/faces/mary.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'BONMAR',
                  },
                  value: 'Mary',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'BONMAR',
                  },
                  value: 'BONMAR',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'mary@somecompany.com',
                  },
                  value: 'mary@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,3,1',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'BONMAR',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/alina.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;CANRAR',
                  },
                  shape: 'Img',
                  value: 'images/faces/alina.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'CANRAR',
                  },
                  value: 'Alina',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'CANRAR',
                  },
                  value: 'CANRAR',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'alina@somecompany.com',
                  },
                  value: 'alina@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,3,2',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'CANRAR',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/bruce.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;FACPAO',
                  },
                  shape: 'Img',
                  value: 'images/faces/bruce.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'FACPAO',
                  },
                  value: 'Bruce',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'FACPAO',
                  },
                  value: 'FACPAO',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'bruce@somecompany.com',
                  },
                  value: 'bruce@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,3,3',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'FACPAO',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/paul.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;COSANT',
                  },
                  shape: 'Img',
                  value: 'images/faces/paul.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'COSANT',
                  },
                  value: 'Paul',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'COSANT',
                  },
                  value: 'COSANT',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'paul@somecompany.com',
                  },
                  value: 'paul@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,3,4',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'COSANT',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/roxana.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;POISAM',
                  },
                  shape: 'Img',
                  value: 'images/faces/roxana.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'POISAM',
                  },
                  value: 'Roxana',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'POISAM',
                  },
                  value: 'POISAM',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'roxana@somecompany.com',
                  },
                  value: 'roxana@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,3,5',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'POISAM',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
            {
              cells: {
                A: {
                  cssClass: 'strong-text',
                  data: {
                    sizeX: '50px',
                    resource: 'images/faces/nicole.jpg',
                    sizeY: '60px',
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                    value: 'CN;COL;MICDOM',
                  },
                  shape: 'Img',
                  value: 'images/faces/nicole.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'MICDOM',
                  },
                  value: 'Nicole',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    p: 'COL',
                    t: 'CN',
                    value: 'MICDOM',
                  },
                  value: 'MICDOM',
                },
                D: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'nicole@somecompany.com',
                  },
                  value: 'nicole@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: '39390000',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                    value: 'Developer',
                  },
                  value: 'Developer',
                },
              },
              children: [],
              disabled: false,
              expandable: false,
              id: '0,3,6',
              isExpanded: false,
              obj: {
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'MICDOM',
              isStaff: false,
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '45%',
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            column: '*TREECOL',
                          },
                        ],
                        horizontal: false,
                      },
                      {
                        content: [
                          {
                            value: '',
                          },
                        ],
                        dim: '33%',
                        horizontal: false,
                      },
                    ],
                  },
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'A',
                          },
                        ],
                        dim: '30%',
                        horizontal: false,
                      },
                      {
                        dim: '70%',
                        horizontal: false,
                        sections: [
                          {
                            content: [
                              {
                                column: 'B',
                              },
                            ],
                            horizontal: false,
                            style: {
                              'font-weight': 'bold',
                            },
                          },
                          {
                            content: [
                              {
                                column: 'D',
                              },
                            ],
                            horizontal: false,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              decode: 'Developer',
            },
          ],
          disabled: false,
          expandable: true,
          id: '0,3',
          isExpanded: false,
          obj: {
            p: 'COL',
            t: 'CN',
          },
          options: true,
          style: {},
          value: 'MAEOLI',
          isStaff: false,
          layout: {
            horizontal: false,
            sections: [
              {
                horizontal: true,
                sections: [
                  {
                    content: [
                      {
                        value: '',
                      },
                    ],
                    dim: '45%',
                    horizontal: false,
                  },
                  {
                    content: [
                      {
                        column: '*TREECOL',
                      },
                    ],
                    horizontal: false,
                  },
                  {
                    content: [
                      {
                        value: '',
                      },
                    ],
                    dim: '33%',
                    horizontal: false,
                  },
                ],
              },
              {
                horizontal: true,
                sections: [
                  {
                    content: [
                      {
                        column: 'A',
                      },
                    ],
                    dim: '30%',
                    horizontal: false,
                  },
                  {
                    dim: '70%',
                    horizontal: false,
                    sections: [
                      {
                        content: [
                          {
                            column: 'B',
                          },
                        ],
                        horizontal: false,
                        style: {
                          'font-weight': 'bold',
                        },
                      },
                      {
                        content: [
                          {
                            column: 'D',
                          },
                        ],
                        horizontal: false,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          decode: 'Team 4',
        },
      ],
      disabled: false,
      expandable: true,
      id: '0',
      isExpanded: false,
      obj: {
        p: 'COL',
        t: 'CN',
      },
      options: true,
      style: {},
      value: 'SANCOS',
      isStaff: false,
      layout: {
        horizontal: false,
        sections: [
          {
            horizontal: true,
            sections: [
              {
                content: [
                  {
                    value: '',
                  },
                ],
                dim: '45%',
                horizontal: false,
              },
              {
                content: [
                  {
                    column: '*TREECOL',
                  },
                ],
                horizontal: false,
              },
              {
                content: [
                  {
                    value: '',
                  },
                ],
                dim: '33%',
                horizontal: false,
              },
            ],
          },
          {
            horizontal: true,
            sections: [
              {
                content: [
                  {
                    column: 'A',
                  },
                ],
                dim: '30%',
                horizontal: false,
              },
              {
                dim: '70%',
                horizontal: false,
                sections: [
                  {
                    content: [
                      {
                        column: 'B',
                      },
                    ],
                    horizontal: false,
                    style: {
                      'font-weight': 'bold',
                    },
                  },
                  {
                    content: [
                      {
                        column: 'D',
                      },
                    ],
                    horizontal: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      decode: 'CTO',
    },
  ],
};
