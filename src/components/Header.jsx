import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src={logo} alt="Equalizer logo" />
    </header>
  );
}
