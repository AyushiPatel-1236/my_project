'use client'

import Cardwrapper from "./card-wrapper"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  
  import { RegisterSchema } from "@/schema";
  import {zodResolver} from "@hookform/resolvers/zod";
  import { useForm } from "react-hook-form"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {z} from "zod"


const RegisterForm = () => {

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email:"",
            password:"",
        }

     

    })
    const onSubmit = (data: z.infer<typeof RegisterSchema>)=>{
        console.log(data);
    }



  return (
    <Cardwrapper
    label="Enter your email below to login to your account"
    title="Login"
    backButtonHref="/auth/login"
    backButtonLabel="Click here"
    
    >
        <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">

                   
                   
                    <FormField
                 control={form.control}
                    name="email"
                    render={({field})=>(
                        <FormItem>
                          <FormLabel>Email</FormLabel>  
                          <FormControl>
                           <Input {...field} type="email" placeholder="ayuussd"/>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                        )}
                     /> 



        <FormField
                 control={form.control}
                    name="password"
                    render={({field})=>(
                        <FormItem>
                          <FormLabel>password</FormLabel>  
                          <FormControl>
                           <Input {...field} type="password" placeholder="**************"/>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                        )}
                     /> 

                   
                      <Button type="submit" className="w-full">
                        Sing in
                      </Button>
                    




                </div>

            </form>

        </Form>


    </Cardwrapper>
  )
}

export default RegisterForm