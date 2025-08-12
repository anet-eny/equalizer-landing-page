import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-250 py-800">
      <img src={logo} alt="Equalizer logo" />
    </header>
  );
}
