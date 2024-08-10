export const GetMoney = (value: number | null | undefined) => {
  debugger;
  if (!value) return '';
  else return `${value.toLocaleString('es-CL')}`;
};
