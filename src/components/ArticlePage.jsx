import { useTheme } from "../context/ThemeContext";
import "./ArticlePage.css";
import LikeButton from './LikeButton';

const ArticlePage = () => {
  const { theme, toggleTheme } = useTheme();

  const themes = {
    light: {
      background: "#ffffff",
      text: "#000000",
      buttonBg: "#007bff",
      buttonText: "#ffffff",
    },
    dark: {
      background: "#1a1a1a",
      text: "#ffffff",
      buttonBg: "#6c757d",
      buttonText: "#ffffff",
    },
  };

  const currentTheme = themes[theme];

  return (
    <div
      className="article-block"
      style={{
        minHeight: "100vh",
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
        transition: "all 0.3s ease",
      }}
    >
      <div className="wrapper">
        <h1 className="title">Стереотипы про игроков DOTA2? Это правда?</h1>

        <article className="article-block">
          <p className="article">
            Игроки DOTA2 часто сталкиваются с различными стереотипами. Одним из самых распространенных является мнение, что все игроки DOTA2 агрессивны и токсичны. Однако, это далеко не всегда так. Многие игроки наслаждаются игрой, общаются с друзьями и получают удовольствие от командной работы.
            <br />
            <br />
            Еще один стереотип заключается в том, что игроки DOTA2 тратят слишком много времени на игру, пренебрегая другими аспектами жизни. В действительности, многие игроки умеют балансировать свое время, уделяя внимание учебе, работе и личной жизни.
            <br />
            <br />
            Важно понимать, что стереотипы часто основаны на отдельных случаях и не отражают реальную картину. Игроки DOTA2 - это разнообразное сообщество людей с различными интересами и характерами. Вместо того чтобы судить их по стереотипам, стоит попробовать понять и узнать их лучше.
          </p>
        </article>

        <div className="buttons">

          <LikeButton />

          <button
            className="theme-button"
            onClick={toggleTheme}
            style={{
              backgroundColor: currentTheme.buttonBg,
              color: currentTheme.buttonText,
              cursor: "pointer",
            }}
          >
            Переключить тему
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
