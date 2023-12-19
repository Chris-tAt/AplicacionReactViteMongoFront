import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFormPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';

import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from './context/TasksConstext';




const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      {/*sirve para login de usuarios */}
      <Route path='/login' element={<LoginPage/>}/>
      {/* sirve para registro */}
      <Route path='/register' element={<RegisterPage/>}/>


     <Route element = {<ProtectedRoute/>}>
       {/*listar todas la tareas */}
       <Route path='/tasks' element={<TasksPage/>}/>
      {/* añadir una tarea */}
      <Route path='/add-task' element={<TaskFormPage/>}/>
      {/* mostrar datos de una tarea en especifico */}
      <Route path='/tasks/:id' element={<TaskFormPage/>}/>
      {/* perfil del usuario */}
      <Route path='/profile' element={<ProfilePage/>}/>
     </Route>
     </Routes>
    </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
