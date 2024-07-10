import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return <header id="header">
        <img src={logo} alt="Logo showing a money bag"/>
        <h1>투자수익률 계산기</h1>
    </header>
};