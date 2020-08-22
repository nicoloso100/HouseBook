import * as React from "react";
import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import {
} from "./styles";

const Singup = () => {
    return (
      <Form>
        <FormGroup>
          <Label>Correo electronico</Label>
          <input type="email" className="form-control" placeholder="Correo"/>
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <input type="password" className="form-control" placeholder="Contraseña"/>
        </FormGroup>
        <FormGroup>
          <Label>Repetir contraseña</Label>
          <input type="password" className="form-control" placeholder="Repetir contraseña"/>
        </FormGroup>
        <FormGroup>
          <button type="button" className="btn btn-primary">Primary</button>
        </FormGroup>
      </Form>
    );
};

export default Singup;
