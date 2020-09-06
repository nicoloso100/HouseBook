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
import { LoginFormTitle } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";

interface registerUserFormProps {
  onRegisterUser: (values: registerUserValues) => Promise<void>;
}

const RegisterForm: React.FC<registerUserFormProps> = ({ onRegisterUser }) => {
  const { register, handleSubmit } = useForm<registerUserValues>();

  let history = useHistory();

  const onSubmit: SubmitHandler<registerUserValues> = (data, e) =>
    onRegisterUser(data).then(() => {
      e?.target.reset();
      history.push("/login");
    });

  return (
    <Col lg="5">
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-white ">
          <LoginFormTitle className="h5">Registrarse</LoginFormTitle>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-4">
          <Form role="form" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-circle-08" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="name"
                  innerRef={register}
                  placeholder="Ingrese su nombre completo"
                  type="text"
                />
              </InputGroup>
            </FormGroup>
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
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="repitPassword"
                  innerRef={register}
                  placeholder="Repita la contraseña ingresada"
                  type="password"
                  autoComplete="off"
                />
              </InputGroup>
            </FormGroup>
            <div className="text-center">
              <Button color="primary" type="submit">
                Sign up
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RegisterForm;
