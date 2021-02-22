<template>
  <div>
    <h3>Date, time, timestamp, number data</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
    <br />
    <br />
    <table>
      <tr><td>String</td><td></td></tr>
      <tr
        ><td>Number&nbsp;</td
        ><td><code>obj: { t: 'NR', p: '', k: '', }</code></td></tr
      >
      <tr
        ><td>Decimal number&nbsp;</td
        ><td
          ><code>obj: { t: 'NR', p: '', k: '', }, decimals: '5'</code></td
        ></tr
      >
      <tr
        ><td>Date formatted by browser locale settings (dd/mm/yyyy)&nbsp;</td
        ><td><code>obj: { t: 'D8', p: '', k: '', }</code></td></tr
      >
      <tr
        ><td>Time (hh:mm:ss)&nbsp;</td
        ><td><code>obj: { t: 'I1', p: '2', k: '', }</code></td></tr
      >
      <tr
        ><td>Time (hh:mm)&nbsp;</td
        ><td><code>obj: { t: 'I1', p: '', k: '', }</code></td></tr
      >
      <tr
        ><td>Timestamp&nbsp;</td
        ><td><code> obj: { t: 'I3', p: '2', k: '', }</code></td></tr
      >
    </table>
  </div>
</template>

<script>
import { dataTableDateTime } from '@/mock/dataTable';

export default {
  name: 'DTDateTimeNumber',
  data() {
    return {
      data: {
        data: dataTableDateTime,
      },
    };
  },
};
</script>
