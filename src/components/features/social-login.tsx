/* eslint-disable @next/next/no-img-element */

import { forwardRef } from 'react';

import { Button } from '@/components/common/button';

export const SocialLogin = forwardRef((props, ref) => {
  const handleSignInWithGoogle = () => {};
  const handleSignInWithFacebook = () => {};

  return (
    <div className="space-y-2">
      <Button
        variant={'outline'}
        className="w-full"
        type="button"
        onClick={handleSignInWithGoogle}
      >
        <img
          src="/assets/icons/google-icon.svg"
          className="mr-2 w-6"
          height={32}
          width={32}
          alt="Google's Icon"
        />
        <span>Continue with Google</span>
      </Button>

      <Button
        variant={'outline'}
        className="w-full"
        type="button"
        onClick={handleSignInWithFacebook}
      >
        <img
          src="/assets/icons/facebook-icon.svg"
          className="mr-2 w-6"
          height={32}
          width={32}
          alt="Google's Icon"
        />
        <span>Continue with Facebook</span>
      </Button>
    </div>
  );
});

SocialLogin.displayName = 'SocialLogin';
