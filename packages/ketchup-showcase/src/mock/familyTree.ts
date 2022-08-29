export const layoutData = {
  columns: [
    {
      isKey: false,
      name: 'A',
      obj: {
        k: '',
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
        k: '',
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
        k: '',
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
        k: '',
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
        k: '',
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
        k: '',
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
            k: 'CN;COL;SANCOS',
            p: 'IMG',
            t: 'J4',
          },
          value: 'images/faces/john.jpg',
        },
        B: {
          cssClass: ' top-right-indicator',
          isEditable: false,
          obj: {
            k: 'SANCOS',
            p: 'COL',
            t: 'CN',
          },
          value: 'John',
        },
        C: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'SANCOS',
            p: 'COL',
            t: 'CN',
          },
          value: 'SANCOS',
        },
        D: {
          isEditable: false,
          obj: {
            k: 'john@somecompany.com',
            p: '',
            t: '**',
          },
          value: 'john@somecompany.com',
        },
        E: {
          isEditable: false,
          obj: {
            k: '39390000',
            p: '',
            t: '**',
          },
          value: '39390000',
        },
        F: {
          isEditable: false,
          obj: {
            k: 'CTO',
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
                k: 'CN;COL;ARRSTE',
                p: 'IMG',
                t: 'J4',
              },
              shape: 'Img',
              value: 'images/faces/james.jpg',
            },
            B: {
              cssClass: ' top-right-indicator',
              isEditable: false,
              obj: {
                k: 'ARRSTE',
                p: 'COL',
                t: 'CN',
              },
              value: 'James',
            },
            C: {
              cssClass: 'strong-text',
              isEditable: false,
              obj: {
                k: 'ARRSTE',
                p: 'COL',
                t: 'CN',
              },
              value: 'ARRSTE',
            },
            D: {
              isEditable: false,
              obj: {
                k: 'james@somecompany.com',
                p: '',
                t: '**',
              },
              value: 'james@somecompany.com',
            },
            E: {
              isEditable: false,
              obj: {
                k: '39390000',
                p: '',
                t: '**',
              },
              value: '39390000',
            },
            F: {
              isEditable: false,
              obj: {
                k: 'Team leader',
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
                    k: 'CN;COL;BONMAT',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/clara.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'BONMAT',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Clara',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'BONMAT',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'BONMAT',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'clara@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'clara@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'BONMAT',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;ZAMCHI',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/fiona.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'ZAMCHI',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Fiona',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'ZAMCHI',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'ZAMCHI',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'fiona@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'fiona@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'ZAMCHI',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;FEIFAB',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/donald.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'FEIFAB',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Donald',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'FEIFAB',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'FEIFAB',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'donald@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'donald@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'FEIFAB',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;GOBMAS',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/max.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'GOBMAS',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Max',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'GOBMAS',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'GOBMAS',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'max@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'max@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'GOBMAS',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;FORDAR',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/linda.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'FORDAR',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Linda',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'FORDAR',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'FORDAR',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'linda@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'linda@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'FORDAR',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;SENLUI',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/mario.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'SENLUI',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Mario',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'SENLUI',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'SENLUI',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'mario@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'mario@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'SENLUI',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;BUSSTE',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/shawn.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'BUSSTE',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Shawn',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'BUSSTE',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'BUSSTE',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'shawn@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'shawn@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'BUSSTE',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;SABMIC',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/cynthia.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'SABMIC',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Cynthia',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'SABMIC',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'SABMIC',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'cynthia@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'cynthia@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'SABMIC',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
            },
          ],
          disabled: false,
          expandable: true,
          id: '0,0',
          isExpanded: false,
          obj: {
            k: 'ARRSTE',
            p: 'COL',
            t: 'CN',
          },
          options: true,
          style: {},
          value: 'Team 1',
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
                k: 'CN;COL;DELGIO',
                p: 'IMG',
                t: 'J4',
              },
              shape: 'Img',
              value: 'images/faces/monique.jpg',
            },
            B: {
              cssClass: ' top-right-indicator',
              isEditable: false,
              obj: {
                k: 'DELGIO',
                p: 'COL',
                t: 'CN',
              },
              value: 'Monique',
            },
            C: {
              cssClass: 'strong-text',
              isEditable: false,
              obj: {
                k: 'DELGIO',
                p: 'COL',
                t: 'CN',
              },
              value: 'DELGIO',
            },
            D: {
              isEditable: false,
              obj: {
                k: 'monique@somecompany.com',
                p: '',
                t: '**',
              },
              value: 'monique@somecompany.com',
            },
            E: {
              isEditable: false,
              obj: {
                k: '39390000',
                p: '',
                t: '**',
              },
              value: '39390000',
            },
            F: {
              isEditable: false,
              obj: {
                k: 'Team leader',
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
                    k: 'CN;COL;VERANA',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/carmine.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'VERANA',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Carmine',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'VERANA',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'VERANA',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'carmine@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'carmine@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'VERANA',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;SANBRU',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/frank.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'SANBRU',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Frank',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'SANBRU',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'SANBRU',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'frank@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'frank@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'SANBRU',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;FOSLUC',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/arthur.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'FOSLUC',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Arthur',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'FOSLUC',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'FOSLUC',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'arthur@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'arthur@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'FOSLUC',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;URRAZI',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/takashi.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'URRAZI',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Takashi',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'URRAZI',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'URRAZI',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'takashi@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'takashi@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'URRAZI',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;PASCAR',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/serena.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'PASCAR',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Serena',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'PASCAR',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'PASCAR',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'serena@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'serena@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'PASCAR',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;VERFRA',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/lucretia.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'VERFRA',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Lucretia',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'VERFRA',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'VERFRA',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'lucretia@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'lucretia@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'VERFRA',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;GIAGIU',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/zlatan.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'GIAGIU',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Zlatan',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'GIAGIU',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'GIAGIU',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'zlatan@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'zlatan@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'GIAGIU',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;ALQMAR',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/peter.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'ALQMAR',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Peter',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'ALQMAR',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'ALQMAR',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'peter@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'peter@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'ALQMAR',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
            },
          ],
          disabled: false,
          expandable: true,
          id: '0,1',
          isExpanded: false,
          obj: {
            k: 'DELGIO',
            p: 'COL',
            t: 'CN',
          },
          options: true,
          style: {},
          value: 'Team 2',
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
                k: 'CN;COL;BENMAR',
                p: 'IMG',
                t: 'J4',
              },
              shape: 'Img',
              value: 'images/faces/jane.jpg',
            },
            B: {
              cssClass: ' top-right-indicator',
              isEditable: false,
              obj: {
                k: 'BENMAR',
                p: 'COL',
                t: 'CN',
              },
              value: 'Jane',
            },
            C: {
              cssClass: 'strong-text',
              isEditable: false,
              obj: {
                k: 'BENMAR',
                p: 'COL',
                t: 'CN',
              },
              value: 'BENMAR',
            },
            D: {
              isEditable: false,
              obj: {
                k: 'jane@somecompany.com',
                p: '',
                t: '**',
              },
              value: 'jane@somecompany.com',
            },
            E: {
              isEditable: false,
              obj: {
                k: '39390000',
                p: '',
                t: '**',
              },
              value: '39390000',
            },
            F: {
              isEditable: false,
              obj: {
                k: 'Team leader',
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
                    k: 'CN;COL;LANMAM',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/logan.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'LANMAM',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Logan',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'LANMAM',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'LANMAM',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'logan@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'logan@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'LANMAM',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;BERNIC',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/stewie.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'BERNIC',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Stewie',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'BERNIC',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'BERNIC',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'stewie@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'stewie@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
                  },
                  value: 'Developer',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
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
                k: 'BERNIC',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;BUSFIO',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/brian.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'BUSFIO',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Brian',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'BUSFIO',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'BUSFIO',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'brian@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'brian@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'BUSFIO',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;LANSTS',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/lois.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'LANMAM',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Lois',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'LANMAM',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'LANMAM',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'lois@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'lois@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'LANSTS',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
            },
          ],
          disabled: false,
          expandable: true,
          id: '0,2',
          isExpanded: false,
          obj: {
            k: 'BENMAR',
            p: 'COL',
            t: 'CN',
          },
          options: true,
          style: {},
          value: 'Team 3',
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
                k: 'CN;COL;MAEOLI',
                p: 'IMG',
                t: 'J4',
              },
              shape: 'Img',
              value: 'images/faces/ken.jpg',
            },
            B: {
              cssClass: ' top-right-indicator',
              isEditable: false,
              obj: {
                k: 'MAEOLI',
                p: 'COL',
                t: 'CN',
              },
              value: 'Ken',
            },
            C: {
              cssClass: 'strong-text',
              isEditable: false,
              obj: {
                k: 'MAEOLI',
                p: 'COL',
                t: 'CN',
              },
              value: 'MAEOLI',
            },
            D: {
              isEditable: false,
              obj: {
                k: 'ken@somecompany.com',
                p: '',
                t: '**',
              },
              value: 'ken@somecompany.com',
            },
            E: {
              isEditable: false,
              obj: {
                k: '39390000',
                p: '',
                t: '**',
              },
              value: '39390000',
            },
            F: {
              isEditable: false,
              obj: {
                k: 'Team leader',
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
                    k: 'CN;COL;MOSPAO',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/ryu.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'MOSPAO',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Ryu',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'MOSPAO',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'MOSPAO',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'ryu@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'ryu@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'MOSPAO',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;BONMAR',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/mary.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'BONMAR',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Mary',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'BONMAR',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'BONMAR',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'mary@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'mary@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
                  },
                  value: 'Developer',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
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
                k: 'BONMAR',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;CANRAR',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/alina.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'CANRAR',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Alina',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'CANRAR',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'CANRAR',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'alina@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'alina@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'CANRAR',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;FACPAO',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/bruce.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'FACPAO',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Bruce',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'FACPAO',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'FACPAO',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'bruce@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'bruce@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'FACPAO',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;COSANT',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/paul.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'COSANT',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Paul',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'COSANT',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'COSANT',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'paul@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'paul@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'COSANT',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;POISAM',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/roxana.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'POISAM',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Roxana',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'POISAM',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'POISAM',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'roxana@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'roxana@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'POISAM',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
                    k: 'CN;COL;MICDOM',
                    p: 'IMG',
                    t: 'J4',
                  },
                  shape: 'Img',
                  value: 'images/faces/nicole.jpg',
                },
                B: {
                  cssClass: ' top-right-indicator',
                  isEditable: false,
                  obj: {
                    k: 'MICDOM',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'Nicole',
                },
                C: {
                  cssClass: 'strong-text',
                  isEditable: false,
                  obj: {
                    k: 'MICDOM',
                    p: 'COL',
                    t: 'CN',
                  },
                  value: 'MICDOM',
                },
                D: {
                  isEditable: false,
                  obj: {
                    k: 'nicole@somecompany.com',
                    p: '',
                    t: '**',
                  },
                  value: 'nicole@somecompany.com',
                },
                E: {
                  isEditable: false,
                  obj: {
                    k: '39390000',
                    p: '',
                    t: '**',
                  },
                  value: '39390000',
                },
                F: {
                  isEditable: false,
                  obj: {
                    k: 'Developer',
                    p: '',
                    t: '**',
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
                k: 'MICDOM',
                p: 'COL',
                t: 'CN',
              },
              options: true,
              style: {},
              value: 'Developer',
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
            },
          ],
          disabled: false,
          expandable: true,
          id: '0,3',
          isExpanded: false,
          obj: {
            k: 'MAEOLI',
            p: 'COL',
            t: 'CN',
          },
          options: true,
          style: {},
          value: 'Team 4',
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
        },
      ],
      disabled: false,
      expandable: true,
      id: '0',
      isExpanded: false,
      obj: {
        k: 'SANCOS',
        p: 'COL',
        t: 'CN',
      },
      options: true,
      style: {},
      value: 'CTO',
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
    },
  ],
};
