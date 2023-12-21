import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAutenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAutenticated) navigate("/tasks");
  }, [isAutenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
 <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {registerErrors.map((error, i )=> (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}

        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="username"
        />
        {
          errors.username &&
            <p className="text-red-500">
              username es requerido
            </p>
        }

        <input
          type="text"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="email"
        />
         {
          errors.email &&
            <p className="text-red-500">
              email es requerido
            </p>
        }

        <input
          type="text"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="password"
        />
         {
          errors.password &&
            <p className="text-red-500">
              password es requerido
            </p>
        }
        <button type="submit"
        className="bg-sky-500 text-white px-4 py-2 rounded-md my-2">Register</button>
      </form>
      <p className="flex gap-x-2 justify-between ">
  ¿Ya tiene una cuenta? {" "}<Link to="/login" className="text-sky-500">Ven Inicia Sesion</Link>
</p>
    </div>
    </div>
   
  );
};

export default RegisterPage;
