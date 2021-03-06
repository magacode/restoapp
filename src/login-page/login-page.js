import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import ContainerRow from "../components/container-row";

const LoginPage = ({ isAuthenticated, authenticate }) => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (isAuthenticated) {
      history.replace(from);
    }
  }, [from, history, isAuthenticated]);

  let login = () => {
    authenticate();
  };

  return (
    <ContainerRow>
      <div className="col">
        <h1 className="mt-5 mb-4 text-center title-component">
          Войти в личный кабинет
        </h1>
        <div className="card mt-5 wrapper-component">
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
              <button type="submit" onClick={login} className="btn btn-primary">
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
