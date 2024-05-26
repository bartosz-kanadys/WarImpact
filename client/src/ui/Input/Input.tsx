import { ComponentPropsWithRef, useId, forwardRef, type Ref } from "react";
import { FieldError } from "react-hook-form";


type Props = {
    label:string;
    error?: FieldError;
    inputClassName?:string;
    labelClassName?:string;
} & ComponentPropsWithRef<'input'>

export const Input = forwardRef(({ label,error,inputClassName,labelClassName, ...rest } : Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
        <div className='my-2'>
                <label htmlFor={id} className={labelClassName}>{label}</label>
                <input id={id} ref={ref}  {...rest} className={inputClassName}/>
                {error && <p className='text-red-500'>{error.message}</p>}
            </div>
    )
});