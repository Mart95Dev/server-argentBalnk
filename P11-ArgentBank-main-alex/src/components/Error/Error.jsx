import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
    <>
      <div className="error">
        <p className="code-error">
          404
          <p className="text-error">
            Oups! La page que vous demandez n&apos;existe pas..
          </p>
        </p>

        <Link to="/">
          <p>Retourner à la page d&apos;accueil</p>
        </Link>
      </div>
    </>
  );
};

export default Error;
