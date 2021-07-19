<template>
  <div>
    <p>Example of Bpmn.io</p>
  </div>
</template>

<script>
import { defaultData } from '@/mock/box';

export default {
  data() {
    return {
      basicData: defaultData,
      collapseLay: {
        sections: [
          {
            sections: [
              {
                style: {
                  textAlign: 'center',
                },
              },
              {
                collapsible: true,
                id: '1',
                style: {
                  textAlign: 'center',
                },
                sections: [
                  {
                    style: {
                      fontWeight: 'bold',
                    },
                  },
                  {},
                  {},
                ],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
