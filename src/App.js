import { lazy, Suspense } from 'react';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import Loader from './components/loader/Loader';
import PageNotFound from './pages/PageNotFound'
import FormSubmitPage from './pages/FormSubmitPage';
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Committee = lazy(() => import('./pages/Committee'));


function App() {
  return(
    <>
    <Main>
    <Suspense fallback={
       <Loader />
    }>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/committee_members' element={<Committee />}></Route>
      <Route exact path='/gallery' element={<Gallery />}></Route>
      <Route exact path='/message_sent' element={<FormSubmitPage />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    </Suspense>
    </Main>
    </>
  )
}

export default App;
