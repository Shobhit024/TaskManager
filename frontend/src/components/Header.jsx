import { useTheme } from "../context/ThemeContext.jsx";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header>
      <button onClick={toggleTheme}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};
export default Header;
