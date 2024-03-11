import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../screens";
import CompleteWaitList from "../screens/completeWaitList";
import Completed from "../screens/completed";
  
const router = createBrowserRouter([
    {
      path: "/",      
      element: <Home/>
    },
    {
        path: '/complete-waitlist',
        element: <CompleteWaitList/>
    },
    {
        path: '/completed',
        element: <Completed/>
    }
]);

export default router;