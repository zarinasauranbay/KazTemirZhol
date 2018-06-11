import React, { Component } from 'react';
import {BrowseRouter, Route, Link} from 'react-router-dom'
import styled from "styled-components";
import {requireImage} from './../helpers/helper'
import './../index.css';



class Register extends Component {
  render() {
    return (
        <div>
            <div className="header d-flex justify-content-center">
                <img className="mt-5 mb-5"  src={require('./../images/logo.png')}  alt=""  />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                <h1 className="registHeadline">Авторизация</h1>
                <p className="registText text-center mt-3">Чтобы войти в систему, необходимо <br/> авторизоваться через ваш ID</p>
            </div>
            <div className="d-flex flex-row justify-content-center mt-3">
            <input className="registInp mr-3 pl-3" type="text" placeholder="Введите ID"/>
            <button className="enter">Войти</button>
            </div>
        </div>
      
      
    );
  }
}

export default Register;
