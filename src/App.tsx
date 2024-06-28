import { Suspense } from 'react';
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from './components/Loading';
import { lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Header = lazy(() => import("./components/Header"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {

  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Suspense>
    </Router>
  )
}


export default App
