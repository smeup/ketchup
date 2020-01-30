import { filterFakeDepartmentData } from '../dataTable';

export function buildSearchFilterSubmittedCallback() {
  return (detail: any) => searchFilterSubmittedCallbackCall(detail);
}

export function searchFilterSubmittedCallbackCall(detail: any) {
  console.log(
    'SearchFilterSubmittedCallbackCall with detail ' + JSON.stringify(detail)
  );
  let aParamForBackend = 'NON';
  if (detail.extra && detail.extra.aParamForBackend) {
    aParamForBackend = detail.extra.aParamForBackend;
  }

  let prefix = aParamForBackend.substring(0, 3).toUpperCase();

  let data = filterFakeDepartmentData(detail.filter, aParamForBackend);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2);
  });
}
