//Verifica si las keys hay values que serian los datos ingresados en los forms
export const isValidObjValue = (obj) => {
  return Object.values(obj).every((value) => value);
};
//Verifica si las keys estan vacias para su validacion de si hay errores
export const isValidObjKey = (obj) => {
  return Object.keys(obj).length === 0;
};
