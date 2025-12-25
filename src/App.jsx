import header_img from "/src/assets/headshot-smaller-no-background.png";
const projectDescriptions = ['foundational', 'engaging', 'thoughtful'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}


function Header() {
    const description = projectDescriptions[genRandomInt(2)];
    return (<header>
        <img src={header_img} alt="Headshot"/>
        <h1>Project Portfolio</h1>
        <p>
            Check out some of my {description} projects.
        </p>
    </header>);
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
