import leaf from "../assets/leaf.png";

export default function Footer() {
  return (
    <footer>
      <p>Nigeria</p>
      <div className="footer-bottom flex">
        <ul className="footer1">
          <li>About</li>
          <li>Advertising</li>
          <li>Business</li>
          <li>How Search works</li>
        </ul>
        <div className="carbon">
          <img src={leaf} alt="" />
          <p>Carbon natural since 2007</p>
        </div>

        <ul className="footer2">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </ul>
      </div>
    </footer>
  );
}
