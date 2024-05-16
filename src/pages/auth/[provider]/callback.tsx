import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { NoContent } from '@/components/features/no-content';
import { RoutePath } from '@/constants/route-paths';

const DEFAULT_FAILED_RESPONSE = {
  redirect: {
    destination: RoutePath.SIGNIN,
    permanent: false,
  },
};

export const getServerSideProps: GetServerSideProps = async (
  c: GetServerSidePropsContext,
) => {
  if (!c.params) {
    return DEFAULT_FAILED_RESPONSE;
  }

  const provider = c.params['provider'];
  const code = c.query['code'];

  if (!code || !provider) {
    return DEFAULT_FAILED_RESPONSE;
  }

  return {
    props: {},
    redirect: {
      destination: RoutePath.DASHBOARD,
      permanent: false,
    },
  };
};

export default NoContent();
