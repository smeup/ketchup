export default [
    {
        path: `/tree/basic`,
        name: 'treeBasic',
        component: () => import(`@/views/tree/TBasic.vue`),
    },
    {
        path: `/tree/table`,
        name: 'treeTable',
        component: () => import(`@/views/tree/TTable.vue`),
    },
];