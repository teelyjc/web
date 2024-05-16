import { Fragment } from 'react';

import { Container } from '@/components/common/container';
import { Separator } from '@/components/common/seperator';
import { Typography } from '@/components/common/typography';
import { Header } from '@/components/features/header';
import { SocialLogin } from '@/components/features/social-login';
import { SignInForm } from '@/components/forms/signin-form';

export default function SignInPage() {
  return (
    <Fragment>
      <Header pageName="Sign In" />

      <Container className="max-w-lg space-y-5 rounded-md bg-white">
        <Typography as="h2">Sign In</Typography>

        <SignInForm />
        <Separator />
        <SocialLogin />
      </Container>
    </Fragment>
  );
}
