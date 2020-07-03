import React from "react";
import { Link } from "react-router-dom";

import ContainerRow from "../components/container-row";

import classes from "./login-page.module.scss";

const LoginPage = () => {
  return (
    <ContainerRow>
      <div className="col">
        <h1 className={`mt-5 mb-4 text-center ${classes.title}`}>
          Войти в личный кабинет
        </h1>
        <div className={`card mt-5 ${classes.wrapper}`}>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Мы никогда не передадим вашу электронную почту кому-либо еще.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Пароль</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Запомнить меня
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Войти
              </button>
              <Link to="/reset-password" className="pl-2">
                Забыли пароль?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </ContainerRow>
  );
};

export default LoginPage;
