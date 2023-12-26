import { useContext } from "react";
import AuthContext from "./context/auth-context";

function Auth() {
  const { status, login } = useContext(AuthContext);
  console.log(status);
  return (
    <div>
      <h1>Giriş yaptın mı?</h1>
      {status ? <p>ohoo çoktan</p> : <p>Hayır</p>}
      <button onClick={login}>Giriş yap</button>
    </div>
  );
}

export default Auth;
