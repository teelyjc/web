import { Fragment } from 'react';

import { Container } from '@/components/common/container';
import { Separator } from '@/components/common/seperator';
import { Typography } from '@/components/common/typography';
import { Header } from '@/components/features/header';
import { SocialLogin } from '@/components/features/social-login';
import { SignUpForm } from '@/components/forms/signup-form';

export default function SignUpPage() {
  return (
    <Fragment>
      <Header pageName="Sign Up" />

      <Container className="max-w-lg space-y-5 rounded-md bg-white">
        <Typography as="h2">Sign Up</Typography>

        <SignUpForm />

        <Separator />

        <SocialLogin />
      </Container>
    </Fragment>
  );
}
