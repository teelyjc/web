import { Fragment } from 'react';

import { Container } from '@/components/common/container';
import { Typography } from '@/components/common/typography';
import { Header } from '@/components/features/header';

export default function ChangePasswordPage() {
  return (
    <Fragment>
      <Header />

      <Container className="space-y-5 rounded-md bg-white">
        <Typography as="h2">Change Password</Typography>
      </Container>
    </Fragment>
  );
}
