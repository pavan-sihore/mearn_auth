import { object, string, boolean } from 'yup'; // number , date, InferType


export const SignInSchema = object({
    username: string().min(2).max(15).required().label("Username"),
    usrps: string().min(6).required().label("Password"),
    captcha_code: string().min(4).max(4).required().label("Captcha code"),
    remember_me: boolean().default(false).optional().label("Remember me"),
});