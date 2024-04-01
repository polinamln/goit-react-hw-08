import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./Login.module.css";

export default function Login() {
  return (
    <div className={css.div}>
      <h1>Please log in</h1>
      <LoginForm></LoginForm>
    </div>
  );
}