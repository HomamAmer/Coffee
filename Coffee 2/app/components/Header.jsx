export default function Header({ toggleDarkMode }) {
    return (
        <header>
            <h1>Coffee</h1>
            <img src="/images/coffee-beans.png" alt="Coffee" width="75" className="coffee_beans"/>
            <button onClick={toggleDarkMode}>Dark / Light</button>
            <div className="links">
                <a href="#Home"><h3>Home</h3></a>
                <a href="#Menu"><h3>Menu</h3></a>
                <a href="#Our coffee ingredients"><h3>Our coffee ingredients</h3></a>
                <a href="#Contact us"><h3>Contact us</h3></a>
            </div>
        </header>
    );
}