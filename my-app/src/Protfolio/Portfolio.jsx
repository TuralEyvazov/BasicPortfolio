import Button from "../Button/Button";
import Icon from "../icons/Icon";
import style from "./portfolio.module.css";

const Portfolio = (props) => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.profilInfo}>
          <h1>Hello , I’m Riyad</h1>
          <p className={style.info}>
            Graphic Designer, UI/UX Designer , Web Designer
          </p>
          <Button text="Get In Touch" />
          <div className={style.icons}>
            <Icon iconClass="fa-brands fa-github" />
            <Icon iconClass="fa-brands fa-twitter" />
            <Icon iconClass="fa-solid fa-basketball" />
          </div>
        </div>
        <div className={style.profilImage}>
          <img src={props.image} alt="profil" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
