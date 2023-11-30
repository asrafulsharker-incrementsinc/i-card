import { Outlet } from "react-router-dom"
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";

const Root = () =>{
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Root