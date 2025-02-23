import {createRoot} from "react-dom/client";


const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello React Element</h1>

function MainContent(){
   return <h1>Hello React</h1>


}
function Navigation(){
    return(
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
    )
}


root.render(

    <div>
    <MainContent/>
        <Navigation/>
    </div>
)