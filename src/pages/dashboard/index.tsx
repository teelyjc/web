import { Fragment, useEffect } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbNextLink,
} from '@/components/common/breadcrumb';
import { Container } from '@/components/common/container';
import { Typography } from '@/components/common/typography';
import { Header } from '@/components/features/header';
import { RoutePath } from '@/constants/route-paths';
import { useSocket } from '@/hooks/use-socket';

export default function DashboardPage() {
  return (
    <Fragment>
      <Header pageName="Dashboard" />

      <Container>
        <Typography as="h3">Dashboard</Typography>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbNextLink href={RoutePath.DASHBOARD}>
                Dashboard
              </BreadcrumbNextLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
    </Fragment>
  );
}
