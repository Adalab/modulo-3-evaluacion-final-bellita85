import { Link } from "react-router-dom";

const Error = (props) => {

    return (
      <header className="header">
          <h2>{props.text}</h2>
        <p>{props.text2}</p>
        <Link to="/" className="nav"><p>{props.text3}</p></Link>
          </header>
    );
  };
  
  export default Error;