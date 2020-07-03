import React from "react";

import ContainerRow from "../components/container-row";

import classes from "./reset-pasword-page.module.scss";

const ResetPasswordPage = () => {
  return (
    <ContainerRow>
      <div className="col">
        <h1 className={`mt-5 mb-4 text-center ${classes.title}`}>
          Восстановить пароль
        </h1>
        <div className={`card mt-3 ${classes.wrapper}`}>
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
                  Введите свою электронную почту
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Восстановить
              </button>
            </form>
          </div>
        </div>
      </div>
    </ContainerRow>
  );
};

export default ResetPasswordPage;
