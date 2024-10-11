import * as z from 'zod';

export const RegisterSchema =z.object({
email:z.string().email({
    message:"Please enter a valid email address"
}),
password:z.string().min(10,{
    message:"password must ba at least 10character long"
}),

})