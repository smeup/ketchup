<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Children can be arranged in two different hierarchical levels: as normal
        child nodes or as staff nodes.<br />
        To mark a child as a staff member, it's as simple as adding the
        <span class="code-word">isStaff</span> property set to
        <span class="code-word">true</span> on the desired node.</p
      >
      <div class="demo-container">
        <kup-family-tree :data.prop="data"></kup-family-tree>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FamilyTreeStaff',
  data() {
    return {
      data: {
        columns: [],
        rows: [
          {
            children: [
              {
                expandable: true,
                id: '01',
                isExpanded: true,
                isStaff: true,
                options: true,
                value: 'Staff member',
              },
              {
                expandable: true,
                id: '02',
                isExpanded: true,
                options: true,
                value: 'Employee',
              },
            ],
            expandable: true,
            id: '0',
            isExpanded: true,
            options: true,
            value: 'Manager',
          },
        ],
      },
    };
  },
};
</script>
