import * as React from "react";
import { Form, Row, Col, FormGroup, Input, Button } from "reactstrap";
import { FormContainer } from "./styles";
import NumberFormat from "react-number-format";
import MyAutosuggest from "components/atoms/MyAutosuggest";
import { generalURLs } from "actions/APICalls/URLs";
import { useForm, SubmitHandler } from "react-hook-form";
import { SALE_TYPE, PROPERTIES } from "constants/propertiesConstants";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import ImageUploader from "react-images-upload";
import { validateCreatePost } from "./validations";
import { defaultCreatePostForm } from "constants/userConstants";

interface CreatePostFormProps {
  onCreatePost: (post: ICreatePost) => Promise<void> | undefined;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onCreatePost }) => {
  const salesTypes = SALE_TYPE as any;
  const propertiesList = PROPERTIES as any;
  const { register, handleSubmit, setValue } = useForm<ICreatePost>({
    defaultValues: defaultCreatePostForm,
  });

  const { addToast } = useToasts();
  const history = useHistory();

  const onDrop = (pictures: File[]) => {
    console.log(pictures);
    setValue("images", pictures);
  };

  const onSubmit: SubmitHandler<ICreatePost> = (data) => {
    const validations = validateCreatePost(data);
    if (validations.valid) {
      const result = onCreatePost(data);
      if (result) {
        result.then(() => {
          addToast("La publicación se ha creado exitosamente.", {
            appearance: "success",
          });
          history.push("/user/index");
        });
      }
    } else {
      addToast(validations.message, {
        appearance: "warning",
      });
    }
  };

  return (
    <FormContainer>
      <Form role="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md="6">
            <FormGroup>
              <Input
                required
                type="select"
                name="type_of_sale"
                innerRef={register}
                className="form-control-alternative"
              >
                <option value={""}>
                  -- Selecciona el tipo de publicación --
                </option>
                {Object.keys(salesTypes).map((key) => {
                  return (
                    <option key={key} value={salesTypes[key].value}>
                      {salesTypes[key].label}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                required
                type="select"
                name="type_of_housing"
                innerRef={register}
                className="form-control-alternative"
              >
                <option value={""}>
                  -- Selecciona la agrupación a la que pertenece --
                </option>
                {Object.keys(propertiesList).map((key) => {
                  return (
                    <option key={key} value={propertiesList[key].value}>
                      {propertiesList[key].label}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <Input
                required
                name="title"
                innerRef={register}
                className="form-control-alternative"
                placeholder="Título de la publicación"
                type="text"
                autoComplete="off"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <NumberFormat
                required
                name="price"
                className="form-control-alternative"
                placeholder="Precio del inmueble"
                customInput={Input}
                thousandSeparator={true}
                prefix={"$ "}
                onValueChange={(value) => setValue("price", value.floatValue)}
                autoComplete="off"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <NumberFormat
                required
                className="form-control-alternative"
                placeholder="Área del inmueble"
                customInput={Input}
                thousandSeparator={true}
                suffix={" m²"}
                onValueChange={(value) =>
                  setValue("dimensions", value.floatValue)
                }
                autoComplete="off"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <FormGroup>
              <NumberFormat
                required
                className="form-control-alternative"
                placeholder="Número de habitaciones"
                customInput={Input}
                thousandSeparator={true}
                suffix={" Habitaciones"}
                onValueChange={(value) => setValue("rooms", value.floatValue)}
                autoComplete="off"
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <NumberFormat
                required
                className="form-control-alternative"
                placeholder="Número de baños"
                customInput={Input}
                thousandSeparator={true}
                suffix={" Baños"}
                onValueChange={(value) =>
                  setValue("bathrooms", value.floatValue)
                }
                autoComplete="off"
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <NumberFormat
                required
                className="form-control-alternative"
                placeholder="Número de parqueaderos"
                customInput={Input}
                thousandSeparator={true}
                suffix={" Parqueaderos"}
                onValueChange={(value) =>
                  setValue("parkings", value.floatValue)
                }
                autoComplete="off"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <FormGroup>
              <MyAutosuggest
                required
                placeholder="Ciudad"
                APIURL={generalURLs.getCities}
                onSelect={(value: string) => setValue("city", value)}
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Input
                required
                name="neighborhood"
                innerRef={register}
                className="form-control-alternative"
                placeholder="Barrio"
                type="text"
                autoComplete="off"
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                required
                name="ubication"
                innerRef={register}
                className="form-control-alternative"
                placeholder="Dirección"
                type="text"
                autoComplete="no"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <Input
                required
                name="nearby_sites"
                innerRef={register}
                className="form-control-alternative"
                placeholder="Sitios cercanos"
                type="text"
                autoComplete="off"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <NumberFormat
                required
                className="form-control-alternative"
                placeholder="Estrato"
                customInput={Input}
                thousandSeparator={true}
                prefix={"Estrato "}
                onValueChange={(value) => setValue("stratum", value.floatValue)}
                autoComplete="off"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <NumberFormat
                required
                className="form-control-alternative"
                placeholder="Antiguedad"
                customInput={Input}
                thousandSeparator={true}
                suffix={" Años"}
                onValueChange={(value) =>
                  setValue("antiquity", value.floatValue)
                }
                autoComplete="off"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Input
                required
                name="description"
                innerRef={register}
                className="form-control-alternative"
                placeholder="Descripción del inmueble"
                rows="4"
                type="textarea"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <ImageUploader
                withPreview
                buttonText="Subir imágenes"
                onChange={onDrop}
                imgExtension={[".jpg", ".png", ".jpeg"]}
                maxFileSize={5242880}
                label="Seleccione máximo 10 imágenes. La primera será la imágen principal"
                fileSizeError="(El archivo es demasiado grande)"
                fileTypeError="(El tipo de archivo no es soportado)"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button className="my-4" color="primary" type="submit">
          Crear publicación
        </Button>
      </Form>
    </FormContainer>
  );
};

export default CreatePostForm;
