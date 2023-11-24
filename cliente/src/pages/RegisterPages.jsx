import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const { values, handleInputChange } = useForm({
    email: '',
    username: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validación de entrada
    if (!values.email || !values.username || !values.password) {
      alert('Por favor, complete todos los campos');
      return;
    }
  
    try {
      const resp = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          username: values.username,
          password: values.password,
        }),
      });
  
      const responseData = await resp.json();
      console.log('Respuesta del servidor:', responseData);
  
      if (resp.status === 201) {
        alert('El usuario ha sido creado con éxito');
        localStorage.setItem("token", responseData.token);
        navigate('/auth/login');
      } else {
        alert('No se pudo crear el usuario');
      }
    } catch (error) {
      alert('No se pudo crear el usuario');
      console.error(error);
  
      if (error instanceof Response && error.headers.get('content-type').includes('application/json')) {
        const responseBody = await error.json();
        console.error('Error response body:', responseBody);
      }
    }
  };
  
  
  return (
    <div className='container pt-5'>
      <div className="row">
        <div className="col-md-5 mx-auto">
          <h1>Bienvenido a MIALQUI</h1>
          <form onSubmit={handleSubmit} action="">
            <input
              type="text"
              className='form-control mb-3'
              placeholder='Ingrese usuario'
              onChange={handleInputChange}
              value={values.username}
              name="username"
            />
            
            <input
              type="text"
              className='form-control mb-3'
              placeholder='Ingrese email'
              onChange={handleInputChange}
              value={values.email}
              name="email"
            />

            <input
              type="password"
              className='form-control mb-3'
              placeholder='Ingrese contraseña'
              onChange={handleInputChange}
              value={values.password}
              name="password"
            />

            <button type="submit" className='btn btn-primary'>
              Registrarme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};



