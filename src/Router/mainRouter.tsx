import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Common/Layout"
import Hero from "../Pages/Hero"
import Register from "../Auth/Register"
import SignIn from "../Auth/SignIn"
import Home from "../Components/Statics/Home"

export const mainRouter =createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[{
        index:true,
        element:<Hero/>
    }],
    
},
{
    path:"/register" ,
    element:<Register/>
},
{
    path:"/sign-in" ,
    element:<SignIn/>
},
{
    path:"/home" ,
    element:<Home/>
}
])