<template>
  <div>
    <h3>Datatable with images and badges</h3>
    <kup-data-table :data.prop="boxImagesData"/>
  </div>
</template>

<script>
    import { imgBadgeData, /* boxBadgeData */ } from '@/mock/box';

    export default {
        name: "DatatableImagesAndBadges",
        data() {
            return {
                boxImagesData: imgBadgeData
            };
        }
    }
</script>