import style from "../../styles/header.module.scss";
import Link from "next/link";
const Header = () => {
  return (
    <div className={style.HeaderContainer}>
      <div className={style.innerContainer}>
        <Link href={"/"}>
          <a className={style.Header_logoLink}>
            <img src="/logo.svg" />
          </a>
        </Link>

        <nav className={style.Header_fullNav}>
          <Link href={"/"}>
            <button
              className={style.Header_backButton + " " + style.Button_button}
            >
              <span
                className={
                  style.Button_iconAlignStart + " " + style.Button_icon
                }
              >
                <img src="/arrow.svg" />
              </span>
              <span>Back to Home</span>
            </button>
          </Link>
        </nav>
        <button
          className={`${style.Button_button} ${style.Header_button} ${style.Button_buttonCompact} ${style.Button_buttonOutline}`}
        >
          <span>Connect Wallet</span>
        </button>
      </div>
    </div>
  );
};

export { Header };
