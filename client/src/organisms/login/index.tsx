import * as React from 'react';
import './styles.css';
import logo from './logo.png';
import iconSingin from './iconSingin.png'
import iconSingup from './iconSingup.png'
import {Label, Input, Form, FormGroup, Button, Row, Col} from 'reactstrap';


function view(){
    function hoverSingup(){
        var element: any = document.getElementById('singin')
        element.style.marginLeft = '1%';
        var element: any = document.getElementById('singup')
        element.style.marginRight = '1%';
    }
    function desHoverSingup(){
        var element: any = document.getElementById('singin')
        element.style.marginLeft = '18%';
        var element: any = document.getElementById('singup')
        element.style.marginRight = '18%';
    }
    function hoverSingin(){
        var element: any = document.getElementById('singup')
        element.style.marginRight = '1%';
        var element: any = document.getElementById('singin')
        element.style.marginLeft = '1%';
    }
    function desHoverSingin(){
        var element: any = document.getElementById('singup')
        element.style.marginRight = '18%';
        var element: any = document.getElementById('singin')
        element.style.marginLeft = '18%';
    }
  return (
    <div className="View">
        <div className="logo">
            <img src={logo} className="View-logo" alt="logo" />
        </div>
        <div className="forms">
            <div className="singin" id="singin" onMouseOver={hoverSingin} onMouseOut={desHoverSingin}> 
                <div className="icon">
                    <img src={iconSingin} className="sing-icon" alt="icon"/>
                </div>
                <div className="form-singin">
                    <Input placeholder="hello@creative-tim.com" type="email" />
                </div>
            </div>
            <div className="singup" id="singup" onMouseOver={hoverSingup} onMouseOut={desHoverSingup}>
                <div className="form-singup">
                <Form>
                    <FormGroup>
                        <Label for="n">Correo electronico</Label>
                        <Input type="text" id="n" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Contraseña</Label>
                        <Input type="password"/>
                    </FormGroup>
                    <Button type="submit">Enviar</Button>
                </Form>
                </div>
                <div className="icon">
                    <img src={iconSingup} className="sing-icon" alt="icon"/>
                </div>
            </div>
        </div>
    </div>
);
}

export default view;
