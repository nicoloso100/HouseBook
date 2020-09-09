export const validateCreatePost = (data: ICreatePost): IFormValidation => {
  let validation: IFormValidation = {
    valid: true,
    message: "",
  };
  console.log(data);
  if (
    data.images === undefined ||
    data.images === null ||
    data.images.length < 2
  ) {
    validation = {
      valid: false,
      message: "Debe seleccionar como mínimo 2 imágenes!",
    };
  } else if (data.images.length > 10) {
    validation = {
      valid: false,
      message: "Debe seleccionar máximo 10 imágenes!",
    };
  }
  return validation;
};
