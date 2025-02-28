import { Link } from "react-router-dom";
import LogoOnly from "./LogoOnly";
import TextLogo from "./TextLogo";

const logos = {
  textLogo: <TextLogo />,
  logo: <LogoOnly />,
};

const defaultStyles = {
  textLogo: "w-50",
  logo: "size-18",
};

function Logo({ type = "logo", className = "" }) {
  const styles = `block ${defaultStyles[type]} ${className}`;

  return (
    <Link to="/" className={styles} aria-label="Home">
      {logos[type]}
    </Link>
  );
}

export default Logo;
