import './App.css';

import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom';
import Appbar from './components/layouts/Appbar';
import SignUp from './components/pages/login_register/SignUp';
import SignIn from './components/pages/login_register/SignIn';
import EventContainer from './components/pages/home/EventContainer';
import DashBoardAppbar from './components/layouts/DashboardAppbar';
import EventList from './components/pages/home/EventList';
import IconBreadcrumbs from './components/pages/user/IconBreadcrumbs';





const router = createBrowserRouter(
  createRoutesFromElements(
       
    <Route>
        <Route path="/" element={<Appbar/>}>
          <Route index element={<SignIn/>}/>
          <Route path="register" element={<SignUp/>}/>
          <Route path="event" element={<EventContainer />} />
        </Route>
        <Route path="dashboard" element={<DashBoardAppbar/>}>
          <Route element={<IconBreadcrumbs />}>

            <Route index element={<EventList option={1}/> }/>
            <Route path="my" element={<EventList option={3}/> }/>
            <Route path="joined" element={<EventList option={2}/> }/>
            <Route path="requested"  element={<EventList option={4}/>}/>
            {/* <Route path=  element={}/> */}
            
          </Route>
        </Route>
    </Route>
  
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
