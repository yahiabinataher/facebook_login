import Modal from "../component/modal/Modal"
import Auth from "../pages/Auth/Auth"
import Layout from "../pages/Layout/Layout"
const privateRouter = [
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Auth/>
            }
        ]
    },
]


export default privateRouter