import { ComponentPropsWithRef, useId, forwardRef, type Ref } from "react";
import { FieldError } from "react-hook-form";


type Props = {
    label:string;
    error?: FieldError;
} & ComponentPropsWithRef<'input'>

export const Input = forwardRef(({ label,error, ...rest } : Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
        <div className='my-2'>
                <label htmlFor={id} className='mr-2'>{label}</label>
                <input id={id} ref={ref}  {...rest} className={'text-red-600 border-2 border-red-400 ring-red-300 placeholder:text-red-300 focus:ring-red-500'}/>
                {error && <p className='text-red-500'>{error.message}</p>}
            </div>
    )
});