import Home from "../pages/Home/Home"
import Layout from "../pages/Layout/Layout"



const publicRouter = [
    {
        element:<Layout/>,
        children:[
            {
                path:"/home",
                element:<Home/>
            }
        ]
    },
]


export default publicRouter