import style from "./index.module.css";
import profil from "./image/Rectangle 2RiyadImg.png";

function App() {
  return (
    <>
      <div className={style.container}>
        <div className={style.profilInfo}>
          <h1>Hello , I’m Riyad</h1>
          <p className={style.info}>
            Graphic Designer, UI/UX Designer , Web Designer
          </p>
          <button>Get In Touch</button>
          <div className={style.icons}>
            <span>
              <i className="fa-brands fa-github"></i>
            </span>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i className="fa-solid fa-basketball"></i>
            </span>
          </div>
        </div>
        <div className={style.profilImage}>
          <img src={profil} alt="profil" />
        </div>
      </div>
    </>
  );
}

export default App;
