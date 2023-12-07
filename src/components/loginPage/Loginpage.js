import React from "react";
import styles from "./LoginPage.module.css";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import LoginBtn from "./LoginBtn";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Loginpage = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }
    const resp = signin(email, password);

    if (resp) {
      setError(resp);
      return;
    }
    navigate("/home");
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.formContainer}>
        <h1>Acessar</h1>
        <form onSubmit={handleSubmit}>
          <EmailInput value={email} setValue={setEmail} />
          <PasswordInput value={password} setValue={setPassword} />
          <LoginBtn label="Entrar" />
        </form>
        <p>{error}</p>
        <p>
          Não tem uma conta? <Link to="/siginUp">&nbsp;Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
