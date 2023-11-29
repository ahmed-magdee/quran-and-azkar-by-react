import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/data";

type LinksHeaderProps = {
  classes?: string;
  classDiv?: string;
};

export default function LinksHeader({ classes, classDiv }: LinksHeaderProps) {
  const links = navLinks.map((link) => {
    return (
      <NavLink className={classes} key={link.id} to={link.to}>
        {link.name}
      </NavLink>
    );
  });

  return <div className={classDiv}>{links}</div>;
}
