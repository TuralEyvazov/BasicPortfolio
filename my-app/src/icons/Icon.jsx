import style from "./icon.module.css";

const Icon = (props) => {
  return (
    <span className={style.icon}>
      <i className={props.iconClass}></i>
    </span>
  );
};

export default Icon;
