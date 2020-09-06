import * as React from "react";
import {
  Col,
  Card,
  CardHeader,
  Button,
  CardBody,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import { LoginFormTitle, RegisterLabel } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginFormProps {
  onLogin: (values: LoginValues) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const { register, handleSubmit } = useForm<LoginValues>();

  const onSubmit: SubmitHandler<LoginValues> = (data) => onLogin(data);

  return (
    <Col lg="5">
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-white ">
          <LoginFormTitle className="h5">Ingresar</LoginFormTitle>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <Form role="form" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="email"
                  innerRef={register}
                  placeholder="Ingrese su email"
                  type="email"
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="password"
                  innerRef={register}
                  placeholder="Ingrese su contraseña"
                  type="password"
                  autoComplete="off"
                />
              </InputGroup>
            </FormGroup>
            <RegisterLabel href="#/signin" className="text-default btn-link">
              ¿Aún no estás registrado? Clic para crear una cuenta
            </RegisterLabel>
            <div className="text-center">
              <Button className="my-4" color="primary" type="submit">
                Sign in
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LoginForm;
