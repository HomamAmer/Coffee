export default function Menu() {
    return (
        <section className="M" id="Menu">
            <h2><i>Menu</i></h2>
            <table className="M_table">
                <tbody>
                    <tr className="main_tr">
                        <th>Coffee</th>
                        <th>Price</th>
                        <th>An image for the coffee</th>
                    </tr>
                    <tr className="tr_l"><td>Espresso</td><td>3.25$</td><td className="img"><img className="coffee" src="/images/expresso.png" alt="Expresso" /></td></tr>
                    <tr className="tr_d"><td>Doppio</td><td>3.85$</td><td className="img"><img className="coffee" src="/images/doppio.png" alt="Doppio" /></td></tr>
                    <tr className="tr_l"><td>Americano</td><td>4.45$</td><td className="img"><img className="coffee" src="/images/americano.png" alt="Americano" /></td></tr>
                    <tr className="tr_d"><td>Flat white</td><td>6.45$</td><td className="img"><img className="coffee" src="/images/flat-white.png" alt="Flat white" /></td></tr>
                    <tr className="tr_l"><td>Macchiato</td><td>4.25$</td><td className="img"><img className="coffee" src="/images/macchiato.png" alt="Macchiato" /></td></tr>
                    <tr className="tr_d"><td>Cappuccino</td><td>5.25$</td><td className="img"><img className="coffee" src="/images/cappuccino.png" alt="Cappuccino" /></td></tr>
                    <tr className="tr_l"><td>Latte</td><td>5.60$</td><td className="img"><img className="coffee" src="/images/latte.png" alt="Latte" /></td></tr>
                    <tr className="tr_d"><td>Mocha</td><td>6.45$</td><td className="img"><img className="coffee" src="/images/mocha.png" alt="Mocha" /></td></tr>
                    <tr className="tr_l"><td>Affogato</td><td>5.00$</td><td className="img"><img className="coffee" src="/images/affogato.png" alt="Affogato" /></td></tr>
                </tbody>
            </table>
        </section>
    );
}