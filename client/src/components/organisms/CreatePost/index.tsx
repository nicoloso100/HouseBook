import * as React from "react";
import { Form, Row, Col, FormGroup, Button } from "reactstrap";
import { EditFormClose, EditFormTitle, FormContainer } from "./styles";
import MyAutosuggest from "components/atoms/MyAutosuggest";
import { generalURLs } from "actions/APICalls/URLs";
import { SALE_TYPE, PROPERTIES } from "constants/propertiesConstants";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import ImageUploader from "react-images-upload";
import { validateCreatePost } from "./validations";
import { defaultCreatePostForm } from "constants/userConstants";
import CreatePostContext from "states/context/createPostContext";
import MyInput from "components/atoms/MyInput";
import MySelect from "components/atoms/MySelect";
import MyNumberInput from "components/atoms/MyNumberInput";
import MyTextArea from "components/atoms/MyTextArea";

interface CreatePostFormProps {
  onAction: (post: ICreatePost) => Promise<void> | undefined;
  onClose?: () => void;
  defaultValues?: ICreatePost;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({
  onAction,
  onClose,
  defaultValues,
}) => {
  const context = React.useContext(CreatePostContext);

  const salesTypes = SALE_TYPE as any;
  const propertiesList = PROPERTIES as any;

  const [createPost, setCreatePost] = React.useState<ICreatePost>(
    defaultCreatePostForm
  );

  const { addToast } = useToasts();
  const history = useHistory();

  React.useEffect(() => {
    if (defaultValues) {
      setCreatePost({ ...defaultValues });
    }
  }, [defaultValues]);

  const onDrop = (pictures: File[]) => {
    setCreatePost((x) => ({ ...x, images: pictures }));
  };

  const onSubmit = () => {
    const newPost = { ...createPost };
    const validations = validateCreatePost(newPost);
    if (validations.valid) {
      const result = onAction(newPost);
      if (result) {
        result.then(() => {
          if (context.isCreate) {
            addToast("La publicación se ha creado exitosamente.", {
              appearance: "success",
            });
            history.push("/user/index");
          } else if (context.isEdit) {
            addToast("La publicación se ha modificado exitosamente.", {
              appearance: "success",
            });
            onClose && onClose();
          }
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
      <EditFormTitle>
        <h2>Modificar Publicación</h2>
        {onClose && <EditFormClose onClick={onClose} className="fa fa-times" />}
      </EditFormTitle>
      <Form role="form" autoComplete="off" onSubmit={onSubmit}>
        <Row>
          <Col md="6">
            <MySelect
              required
              defaultValue={
                context.isEdit ? createPost.type_of_sale : undefined
              }
              onChange={(value) =>
                setCreatePost((x) => ({
                  ...x,
                  type_of_sale: value,
                }))
              }
              defaultOption="-- Selecciona el tipo de publicación --"
              options={Object.keys(salesTypes).map(
                (key) =>
                  ({
                    text: salesTypes[key].label,
                    value: salesTypes[key].value,
                  } as ISelectOption)
              )}
            />
          </Col>
          <Col md="6">
            <MySelect
              required
              defaultValue={
                context.isEdit ? createPost.type_of_housing : undefined
              }
              onChange={(value) =>
                setCreatePost((x) => ({
                  ...x,
                  type_of_housing: value,
                }))
              }
              defaultOption="-- Selecciona la agrupación a la que pertenece --"
              options={Object.keys(propertiesList).map(
                (key) =>
                  ({
                    text: propertiesList[key].label,
                    value: propertiesList[key].value,
                  } as ISelectOption)
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <MyInput
              required
              defaultValue={createPost.title}
              onChange={(value) =>
                setCreatePost((x) => ({
                  ...x,
                  title: value,
                }))
              }
              placeholder="Título de la publicación"
            />
          </Col>
          <Col md="3">
            <MyNumberInput
              required
              defaultValue={context.isEdit ? createPost.price : undefined}
              thousandSeparator={true}
              placeholder="Precio del inmueble"
              prefix={"$ "}
              onChange={(value) =>
                setCreatePost((x) => ({
                  ...x,
                  price: value,
                }))
              }
            />
          </Col>
          <Col md="3">
            <FormGroup>
              <MyNumberInput
                required
                defaultValue={
                  context.isEdit ? createPost.dimensions : undefined
                }
                placeholder="Área del inmueble"
                thousandSeparator={true}
                suffix={" m²"}
                onChange={(value) =>
                  setCreatePost((x) => ({
                    ...x,
                    dimensions: value,
                  }))
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <FormGroup>
              <MyNumberInput
                required
                defaultValue={context.isEdit ? createPost.rooms : undefined}
                placeholder="Número de habitaciones"
                suffix={" Habitaciones"}
                onChange={(value) =>
                  setCreatePost((x) => ({
                    ...x,
                    rooms: value,
                  }))
                }
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <MyNumberInput
                required
                defaultValue={context.isEdit ? createPost.bathrooms : undefined}
                placeholder="Número de baños"
                suffix={" Baños"}
                onChange={(value) =>
                  setCreatePost((x) => ({
                    ...x,
                    bathrooms: value,
                  }))
                }
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <MyNumberInput
                required
                defaultValue={context.isEdit ? createPost.parkings : undefined}
                placeholder="Número de parqueaderos"
                suffix={" Parqueaderos"}
                onChange={(value) =>
                  setCreatePost((x) => ({
                    ...x,
                    parkings: value,
                  }))
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <FormGroup>
              <MyAutosuggest
                required
                defaultValue={createPost.city}
                placeholder="Ciudad"
                APIURL={generalURLs.getCities}
                onSelect={(value: string) =>
                  setCreatePost((x) => ({
                    ...x,
                    city: value,
                  }))
                }
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <MyInput
                required
                defaultValue={createPost.neighborhood}
                onChange={(value) =>
                  setCreatePost((x) => ({
                    ...x,
                    neighborhood: value,
                  }))
                }
                placeholder="Barrio"
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <MyInput
                required
                defaultValue={createPost.ubication}
                onChange={(value) =>
                  setCreatePost((x) => ({
                    ...x,
                    ubication: value,
                  }))
                }
                placeholder="Dirección"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <MyInput
                required
                defaultValue={createPost.nearby_sites}
                onChange={(value) =>
                  setCreatePost((x) => ({
                    ...x,
                    nearby_sites: value,
                  }))
                }
                placeholder="Sitios cercanos"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <MyNumberInput
                required
                defaultValue={context.isEdit ? createPost.stratum : undefined}
                placeholder="Estrato"
                prefix={"Estrato "}
                onChange={(value) =>
                  setCreatePost((x) => ({
                    ...x,
                    stratum: value,
                  }))
                }
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <MyNumberInput
                required
                defaultValue={context.isEdit ? createPost.antiquity : undefined}
                placeholder="Antiguedad"
                suffix={" Años"}
                onChange={(value) =>
                  setCreatePost((x) => ({
                    ...x,
                    antiquity: value,
                  }))
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <MyTextArea
                defaultValue={createPost.description}
                onChange={(value) =>
                  setCreatePost((x) => ({
                    ...x,
                    description: value,
                  }))
                }
                placeholder="Descripción del inmueble"
              />
            </FormGroup>
          </Col>
        </Row>
        {context.isCreate && (
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
        )}
        <Button className="my-4" color="primary" onClick={onSubmit}>
          {context.isCreate ? "Crear publicación" : "Modificar publicación"}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default CreatePostForm;
