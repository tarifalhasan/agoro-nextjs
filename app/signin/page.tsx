"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please enter a valid email address",
    })
    .email(),
  password: z.string().min(8, {
    message: "wrong password ",
  }),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "agora123@gmail.com",
      password: "54545454854",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <Container>
      <div className="flex space-y-5 py-8 flex-col min-h-screen">
        <Image
          className=" block mx-auto"
          src={"/images/logo.svg"}
          alt="logo"
          width={119}
          height={45}
        />
        <div className=" space-y-3">
          <h3 className=" text-2xl text-white text-center font-bold leading-[150%]">
            FOR THE LOVE OF <br />
            INCREDIBLE ART AND MUSIC
          </h3>
          <p className=" text-sm text-neutral-20 text-center font-normal">
            Let’s make something awesome together
          </p>
        </div>
        <div className=" space-y-2">
          <button className=" outline-none  focus:outline-none w-full flex items-center justify-center  gap-2 border border-border px-1 py-3">
            <Image
              src={"/images/google.svg"}
              alt="google"
              width={44}
              height={44}
            />
            <span className="text-base font-medium text-white">
              SIGN IN WITH GOODLE
            </span>
          </button>
          <div className="flex items-center gap-1">
            <span className=" w-full h-[1px] bg-border"></span>
            <span className="text-sm font-medium text-border">or</span>
            <span className=" w-full h-[1px] bg-border"></span>
          </div>
        </div>
        <Form {...form}>
          <form className=" space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="flex h-[54px] w-full border border-input bg-background px-3 py-2 ">
                      <input
                        type={showPassword ? "text" : "password"}
                        className=" flex-1 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-sm ring-offset-background font-medium bg-transparent  text-white  placeholder:text-muted-foreground"
                        placeholder="Enter your password"
                        {...field}
                      />
                      <Image
                        src={"/icons/eye.svg"}
                        alt="eye"
                        width={24}
                        height={24}
                        quality={100}
                        onClick={() => setShowPassword((prev) => !prev)}
                      />
                    </div>
                  </FormControl>
                  <Link
                    className="text-white block underline text-sm font-medium  text-right"
                    href={"/forget-password"}
                  >
                    Forgot password?
                  </Link>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" space-y-2">
              <Button className=" w-full">Sign In</Button>
              <p className="text-center text-sm font-normal text-white">
                Don’t have an account?{" "}
                <Link className=" underline" href={"/sign-up"}>
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default SignIn;
