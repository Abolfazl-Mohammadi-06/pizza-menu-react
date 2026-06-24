const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

export default function App(){

return<>
<Header/>
<Menu/>

<Footer/>
</>
}

function Header() {
    return <header className="header"><h1>Fast React Pizza Co.</h1></header>
}


function Pizza({pizzaData}) {



    return <li className={`pizza ${pizzaData.soldOut && "sold-out"}`}>
        <img src={pizzaData.photoName} alt={pizzaData.name}/>
        <div>
            <h3>{pizzaData.name}</h3>
            <p>{pizzaData.ingredients}</p>
            <span>{pizzaData.soldOut ? "Sold out" : `${pizzaData.price}$`}</span>
        </div>
    </li>

}

function Menu() {

    const pizzas = pizzaData;
    const number_of_pizzas = pizzas.length;


    return <main className="menu">
        <h2>Our menu</h2>


        {number_of_pizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine.
                        6 creative dishes to choose from.
                        All from our stone oven, all organic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzaData.map(pizza => <Pizza pizzaData={pizza} key={pizza.name}/>)}
                    </ul>
                </>)
            : <p>we're still working on our menu. Please ci=ome back later :) </p>}


        
    </main>
}



function Footer() {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;


    return <footer className="footer">
        {/*{new Date().toLocaleTimeString()}. We're currently open*/}
        {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour}/>) :
            <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00.</p>}
    </footer>
}


function Order({closeHour, openHour}) {
    return <div className="order">
        <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
        <button className="btn">Order</button>
    </div>
}


