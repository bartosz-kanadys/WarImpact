import { Input } from "../../ui/Input"
import { useForm, type SubmitHandler } from "react-hook-form"
import { LoginFormData,validationSchema } from "./types";
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react';
import { MenuNavLink } from "../../ui/MenuNavLink";
import { routes } from "../../routes";
import { useAuthContext } from "../Auth/AuthContext";

export const LoginForm = () => {
    const inputClass = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    const labelClass = "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    const { logIn } = useAuthContext();
    const { register, handleSubmit, formState: {errors}} = useForm<LoginFormData>({ resolver: zodResolver(validationSchema)});
    const [message, setMessage] = useState('');

    const handleLoginForm: SubmitHandler<LoginFormData> = async (data) => {
        const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        const token = responseData.accesToken;
        localStorage.setItem('jwtToken', token);
        setMessage(`Success: ${responseData.message}`);
        logIn
      } else {
        setMessage(`Error: ${responseData.message}`);
      }
        };

    return (
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-16 h-16 mr-2" src="https://emojigraph.org/media/facebook/beaver_1f9ab.png" alt="logo" />
                Bober
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleLoginForm)}>
                        <div>
                            <Input
                                label="Your login"
                                {...register("login")}
                                inputClassName={inputClass}
                                labelClassName={labelClass}
                                placeholder="your login"
                                error={errors.login}
                            />
                        </div>
                        <div>
                        <Input
                                label="Password"
                                {...register("password")}
                                inputClassName={inputClass}
                                labelClassName={labelClass}
                                type="password"
                                placeholder="••••••••••••"
                                error={errors.password}
                            />
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?
                            <MenuNavLink
                            to={routes.REGISTRATIONFORM.path}
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >Sign up</MenuNavLink>
                        </p>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    </section>
    )
}