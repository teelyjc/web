import { Fragment } from 'react';

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

export default function SettingsPage() {
  return (
    <Fragment>
      <Header pageName="Settings" />

      <Container>
        <Typography as="h3">Settings</Typography>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbNextLink href={RoutePath.SETTINGS}>
                Settings
              </BreadcrumbNextLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
    </Fragment>
  );
}
