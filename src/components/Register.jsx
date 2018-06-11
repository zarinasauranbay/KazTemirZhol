import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from "styled-components";
import './../index.css';

class Register extends Component {
  render() {
    return (
        <div className="registmain d-flex flex-column">
            <div className="header d-flex justify-content-center">
                <img className="mt-5 mb-5"  src={require('./../images/logo.png')}  alt=""  />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                <h1 className="registHeadline">Авторизация</h1>
                <p className="registText text-center mt-3">Чтобы войти в систему, необходимо <br/> авторизоваться через ваш ID</p>
            </div>
            <div className="d-flex flex-row justify-content-center mt-3">
            <input className="registInp mr-3 pl-3" type="text" placeholder="Введите ID"/>
            <button className="enter"><Link to='/registerConfirm' className="enter">Войти</Link></button>
            </div>
            <div className="coop d-flex mb-4 justify-content-center align-items-end">
                <p className="registCoop">© 2018 АО “Қазақстан Темір Жолы”. Все права защищены.</p>
            </div>
        </div>
      
      
    );
  }
}

export default Register;
