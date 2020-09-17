import { isNullOrEmpty, isInvalidNumber } from "utils";

export const validateCreatePost = (data: ICreatePost): IFormValidation => {
  let validation: IFormValidation = {
    valid: true,
    message: "",
  };
  if (isNullOrEmpty(data.type_of_sale)) {
    validation = {
      valid: false,
      message: "Debe seleccionar el tipo de publicación!",
    };
  } else if (isNullOrEmpty(data.type_of_housing)) {
    validation = {
      valid: false,
      message: "Debe seleccionar la agrupación a la que pertenece!",
    };
  } else if (isNullOrEmpty(data.title)) {
    validation = {
      valid: false,
      message: "Debe ingresar un titulo!",
    };
  } else if (isInvalidNumber(data.price)) {
    validation = {
      valid: false,
      message: "Debe ingresar un precio!",
    };
  } else if (isInvalidNumber(data.price)) {
    validation = {
      valid: false,
      message: "Debe ingresar un precio!",
    };
  } else if (isInvalidNumber(data.dimensions)) {
    validation = {
      valid: false,
      message: "Debe ingresar un área!",
    };
  } else if (isInvalidNumber(data.rooms)) {
    validation = {
      valid: false,
      message: "Debe ingresar el número de habitaciones!",
    };
  } else if (isInvalidNumber(data.bathrooms)) {
    validation = {
      valid: false,
      message: "Debe ingresar el número de baños!",
    };
  } else if (isInvalidNumber(data.parkings)) {
    validation = {
      valid: false,
      message: "Debe ingresar el número de parqueaderos!",
    };
  } else if (isNullOrEmpty(data.city)) {
    validation = {
      valid: false,
      message: "Debe ingresar la ciudad!",
    };
  } else if (isNullOrEmpty(data.neighborhood)) {
    validation = {
      valid: false,
      message: "Debe ingresar el barrio!",
    };
  } else if (isNullOrEmpty(data.ubication)) {
    validation = {
      valid: false,
      message: "Debe ingresar la dirección!",
    };
  } else if (isNullOrEmpty(data.nearby_sites)) {
    validation = {
      valid: false,
      message: "Debe ingresar los sitios cercanos!",
    };
  } else if (isInvalidNumber(data.stratum)) {
    validation = {
      valid: false,
      message: "Debe ingresar el estrato!",
    };
  } else if (isInvalidNumber(data.antiquity)) {
    validation = {
      valid: false,
      message: "Debe ingresar la antiguedad!",
    };
  } else if (isNullOrEmpty(data.description)) {
    validation = {
      valid: false,
      message: "Debe ingresar la descripción!",
    };
  } else if (
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
