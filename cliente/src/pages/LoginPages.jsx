import { AuthContext } from "../context/AuthProvider";
import { fetchWithOutAuth } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../hooks/useForm.js"
import { SocketContext } from "../context/SocketProvider";

 const LoginPage = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const { conectarSocket } = useContext(SocketContext)

  const { values, handleInputChange, reset } = useForm({
    username: 'juliana21',
    password: '12345'
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const resp = await fetchWithOutAuth('/auth/login', 'POST', values);
    if(resp.user){

      // Se dispara la acción para modificar el estado global
      login(resp);
      
      // Persistencia
      localStorage.setItem('user', JSON.stringify(resp.user));
      localStorage.setItem('token', JSON.stringify(resp.token));
      
      conectarSocket();

      alert('Bienvenid@!!!');
      reset();
      

      return navigate('/home');
    } else {
      alert('Algo salió mal')
    }

  }

  const { username, password } = values;

  return (
    <div className='container pt-5'>
      <div className="row">
        <div className="col-md-5 mx-auto">
          <h1>Login</h1>
          <form
            onSubmit={handleSubmit}
            action="">
            <input
              type="text"
              className='form-control mb-3'
              placeholder='Ingrese usuario'
              onChange={handleInputChange}
              value={username}
              name="username"
            />

            <input
              type="password"
              className='form-control mb-3'
              placeholder='Ingrese contraseña'
              onChange={handleInputChange}
              value={password}
              name="password"
            />

            <button 
              type="submit" 
              className='btn btn-primary'>
                Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;