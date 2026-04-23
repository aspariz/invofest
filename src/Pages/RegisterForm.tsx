import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import InputText from "../Components/UI/InputText";
import InputPassword from "../Components/UI/InputPassword";

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().min(1, "Email harus diisi").email("Email tidak valid"),
    password: z.string().min(8, "Password harus terdiri dari minimal 8 karakter"),
    event: z.string().min(1, "Event harus dipilih"),
    bio: z.string().min(1, "Biodata harus diisi"),
});

type FormData = z.infer<typeof schema>;

const RegisterForm = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onSubmit",
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        navigate("/");
    };

    const onError = (err: any) => {
        console.log("ERROR VALIDASI:", err);
    };

    const inputBaseClass = `w-full p-3.5 rounded-xl border text-sm outline-none transition-all duration-300 shadow-sm`;
    const errorClass = `border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200`;
    const defaultClass = `border-gray-200 focus:border-red-700 focus:ring-4 focus:ring-red-50`;

    return (
        <div className="flex flex-col w-full max-w-md mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Pendaftaran Invovest 2026
                </h2>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit, onError)}
                noValidate
                className="bg-white p-8 rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50"
            >
                <div className="space-y-5">
                    <div className="group">
                        <InputText
                            label="Nama Lengkap"
                            nama="nama"
                            register={register}
                            error={errors.nama?.message}
                        />
                    </div>

                    <div className="group">
                        <InputText
                            label="Email"
                            nama="email"
                            register={register}
                            error={errors.email?.message}
                        />
                    </div>

                    <div className="group">
                        <InputPassword
                            label="Password"
                            nama="password"
                            register={register}
                            error={errors.password?.message}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[13px] font-semibold text-gray-700 ml-1">
                            Pilih Event
                        </label>
                        <select
                            {...register("event")}
                            defaultValue=""
                            className={`${inputBaseClass} appearance-none bg-[url('https://cdn-icons-png.flaticon.com/512/271/271210.png')] bg-size[12px] bg-position[right_1rem_center] bg-no-repeat
                ${errors.event ? errorClass : defaultClass}`}
                        >
                            <option value="" disabled>Pilih acara yang tersedia</option>
                            <option value="webinar">Webinar</option>
                            <option value="workshop">Workshop</option>
                            <option value="IT Competition">IT Competition</option>
                        </select>
                        {errors.event && (
                            <span className="text-red-600 text-xs mt-1 ml-1 font-medium italic">
                                {errors.event.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[13px] font-semibold text-gray-700 ml-1">
                            Biodata
                        </label>
                        <textarea
                            {...register("bio")}
                            rows={3}
                            placeholder="Ceritakan sedikit tentang latar belakang Anda..."
                            className={`${inputBaseClass} resize-none
                ${errors.bio ? errorClass : defaultClass}`}
                        />
                        {errors.bio && (
                            <span className="text-red-600 text-xs mt-1 ml-1 font-medium italic">
                                {errors.bio.message}
                            </span>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full mt-8 bg-red-700 text-white py-4 rounded-xl font-bold text-sm tracking-wide 
                    shadow-lg shadow-red-900/20 hover:bg-red-800 hover:-translate-y-0.5 
                    active:scale-95 transition-all duration-200"
                >
                    Daftar Sekarang
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;