import * as React from "react";
import { Col, Media, Row } from "reactstrap";
import { FormContainer, RowContainer, ImgContainer, MediaContainer } from "./styles";
import MyInput from "atoms/MyInput/index";
import imagen from "assets/images/background/1.jpg"

interface PublicationFormProps {
}

const PublicationForm: React.FC<PublicationFormProps> = ({
}) => {

    const variable = (valor: string) =>{
        console.log(valor)
    }

  return (
    <FormContainer>
        <RowContainer >
            <Col className="col-4">
                <MyInput label="Titulo" type="text"></MyInput>
            </Col>
            <Col className="col-4">
                <MyInput label="precio" type="number"></MyInput>
            </Col>
            <Col className="col-4">
                <MyInput label="Dimensiones" type="text"></MyInput>
            </Col>
        </RowContainer>
        <RowContainer >
            <Col className="col-4">
                <MyInput label="N° Habitaciones" type="number"></MyInput>
            </Col>
            <Col className="col-4">
                <MyInput label="N° Baños" type="number"></MyInput>
            </Col>
            <Col className="col-4">
                <MyInput label="N° parqueaderos" type="number"></MyInput>
            </Col>
        </RowContainer>
        <RowContainer >
            <Col className="col-6">
                <MyInput label="Barrio" type="Text"></MyInput>
            </Col>
            <Col className="col-6">
                <MyInput label="Ubicación" type="Text"></MyInput>
            </Col>
        </RowContainer>
        <RowContainer >
            <Col className="col-6">
                <MyInput label="Areas comunes y recreación" type="Text"></MyInput>
            </Col>
            <Col className="col-6">
                <MyInput label="Estrato" type="number"></MyInput>
            </Col>
        </RowContainer>
        <RowContainer >
            <Col className="col-6">
                <MyInput label="Tiempo de contrucción" type="Text"></MyInput>
            </Col>
            <Col className="col-6">
                <MyInput label="Venta o arriendo" type="select"></MyInput>
            </Col>
        </RowContainer>
        <RowContainer >
            <Col className="col-12">
                <MyInput label="Tiempo de contrucción" type="textarea"></MyInput>
            </Col>
        </RowContainer>
        <RowContainer >
            <Col className="col-4">
                <ImgContainer>
                <MediaContainer src={imagen} ></MediaContainer>
                </ImgContainer>
            </Col>
            <Col className="col-4">
                <MyInput label="Subir imagen" type="file"></MyInput>
            </Col>
        </RowContainer>
        <RowContainer>
            <button className="btn btn-primary">Guardar</button>
        </RowContainer>
    </FormContainer>
  );
};

export default PublicationForm;
