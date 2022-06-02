import { Col, Container, Row, Nav, Navbar} from "react-bootstrap"
import PlayerController from "../Components/Controller"



const AppLayout= ({
        children
    })=>{
        return(
            <Container fluid className="layout-app-window">
                {children}
            </Container>
        )
    }


export default AppLayout;