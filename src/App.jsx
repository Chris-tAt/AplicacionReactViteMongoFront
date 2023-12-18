import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<h1>home page</h1>}/>
      {/*sirve para login de usuarios */}
      <Route path='/login' element={<LoginPage/>}/>
      {/* sirve para registro */}
      <Route path='/register' element={<RegisterPage/>}/>
      {/*listar todas la tareas */}
      <Route path='/tasks' element={<h1>Tasks Page</h1>}/>
      {/* añadir una tarea */}
      <Route path='/add-task' element={<h1>new tasks</h1>}/>
      {/* mostrar datos de una tarea en especifico */}
      <Route path='/tasks/:id' element={<h1>update page</h1>}/>
      {/* perfil del usuario */}
      <Route path='/profile' element={<h1>profile</h1>}/>
     </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
