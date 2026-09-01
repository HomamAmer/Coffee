export default function Ingredients() {
    return (
        <section className="OCI" id="Our coffee ingredients">
            <h2><i>Our coffee ingredients</i></h2>
            <table className="OCI_table">
                <tbody>
                    <tr><th>Espresso</th><td>Concentrated coffee</td></tr>
                    <tr><th>Doppio</th><td>Extra espresso</td></tr>
                    <tr><th>Americano</th><td>Espresso + Water</td></tr>
                    <tr><th>Flat white</th><td>Espresso + Steamed milk</td></tr>
                    <tr><th>Macchiato</th><td>Espresso + Milk foam</td></tr>
                    <tr><th>Cappuccino</th><td>Espresso + Steamed milk + Milk foam</td></tr>
                    <tr><th>Latte</th><td>Espresso + (Steamed milk * 2) + Milk foam</td></tr>
                    <tr><th>Mocha</th><td>Espresso + Chocolate + Steamed milk</td></tr>
                    <tr><th>Affogato</th><td>Espresso + Ice cream</td></tr>
                </tbody>
            </table>
        </section>
    );
}