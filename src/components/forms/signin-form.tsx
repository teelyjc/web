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
import { useToast } from '@/hooks/use-toast';
import { useSignIn } from '@/hooks/use-users';

const signInSchema = z.object({
  email: z.string().min(5).email(),
  password: z.string().min(8, 'password must contain at least 8 characters'),
});

export function SignInForm() {
  const router = useRouter();
  const { mutate: signIn, isSuccess: isSignInSuccess } = useSignIn();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof signInSchema>> = (data) => {
    signIn({ email: data.email, password: data.password });
    router.push(RoutePath.DASHBOARD);
  };

  useEffect(() => {
    if (isSignInSuccess) {
      router.push(RoutePath.DASHBOARD);
    }
  }, [isSignInSuccess, router]);

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

        <Button type="submit" className="w-full">
          Sign In
        </Button>

        <Button asChild variant={'link'}>
          <Link href={RoutePath.SIGNUP} className="w-full text-sm">
            Not a member ?
          </Link>
        </Button>
      </form>
    </Form>
  );
}
