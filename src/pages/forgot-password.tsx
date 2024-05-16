import { Fragment } from 'react';

import { Container } from '@/components/common/container';
import { Typography } from '@/components/common/typography';
import { Header } from '@/components/features/header';

export default function ForgotPasswordPage() {
  return (
    <Fragment>
      <Header />

      <Container className="space-y-5 rounded-md bg-white">
        <Typography as="h2">Forgot Password</Typography>
      </Container>
    </Fragment>
  );
}
