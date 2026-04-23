import { useForm } from "react-hook-form";
import  InputText  from "../Components/UI/InputText";
import  InputPassword  from "../Components/UI/InputPassword";


import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../Components/UI/Button";

type FormData = {
    email: string; 
    password: string; 
    };

const schema = z.object({ 
    email: z.string().email("Email tidak valid"), 
    password: z.string().min(8, "Minimal 8 karakter"), 
});

export default function LoginForm() {
    const{ 
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });
    
    
    const onSubmit = (data: FormData) => { 
        console.log(data); 
    }; 

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                label="Email"
                nama="email"
                register={register}
                error={errors.email?.message}
                />
                <InputPassword
                label="Password"
                nama="password"
                register={register}
                error={errors.password?.message}
                />
                
                <Button label="Login" variant="primary" type="submit" />
            </form>
        </div>
    );
}