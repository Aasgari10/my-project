import logoImg from "../assets/iran.png";
import "../indexQuiz.css"
export default function Header() {
  return (
    <header className="header-history">
      <img src={logoImg} alt="React-history Quiz-history logo-history" />
      <h1>آزمون تاریخ ایران</h1>
    </header>
  );
}
