import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';

import { Button } from '@/components/common/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/common/form';
import { Input } from '@/components/common/input';
import { RoutePath } from '@/constants/route-paths';
import { useSignUp } from '@/hooks/use-users';

const signUpInputs = z
  .object({
    email: z.string().min(5).email(),
    password: z.string().min(8, 'password must contain at least 8 characters'),
    confirmPassword: z
      .string()
      .min(8, 'confirm password must contain at least 8 chracters'),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'password and confirm password mismatch',
    path: ['confirmPassword'],
  });

export function SignUpForm() {
  const router = useRouter();
  const { mutate: signUp, isSuccess: isSignUpSucceed } = useSignUp();

  const form = useForm<z.infer<typeof signUpInputs>>({
    resolver: zodResolver(signUpInputs),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof signUpInputs>> = ({
    email,
    password,
    confirmPassword,
  }) => {
    signUp({ email, password, confirmPassword });
  };

  useEffect(() => {
    if (isSignUpSucceed) {
      router.push(RoutePath.SIGNIN);
    }
  }, [isSignUpSucceed, router]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
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
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Sign Up
        </Button>

        <Button asChild variant={'link'}>
          <Link href={RoutePath.SIGNIN} className="w-full">
            Already a member ?
          </Link>
        </Button>
      </form>
    </Form>
  );
}
