import Logo from "../assets/googlelogo.png";
import "../App.css";
import SearchBar from "./SearchBar";
import Button from "./Botton";
import Language from "./Language";

export default function SearchSection() {
  return (
    <main>
      <img src={Logo} alt="Google logo" className="google-logo" />
      <SearchBar />
      <Button />
      <Language />
    </main>
  );
}
