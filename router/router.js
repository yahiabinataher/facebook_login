import { createBrowserRouter } from "react-router-dom";
import privateRouter from "./PrivateRouter";
import publicRouter from "./PublicRouter";


const router = createBrowserRouter([...privateRouter,...publicRouter])
export default router