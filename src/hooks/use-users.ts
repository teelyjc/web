import { useMutation } from '@tanstack/react-query';

import { fetch } from '@/libs/fetch';
import { UserSignInRequest, UserSignUpRequest } from '@/types/user';

export function useSignUp() {
  return useMutation({
    mutationFn: (userCreateRequest: UserSignUpRequest) => {
      return fetch.post('/users/register', { ...userCreateRequest });
    },
  });
}

export function useSignIn() {
  return useMutation({
    mutationFn: (userSignInRequest: UserSignInRequest) => {
      return fetch.post('/auth/signin', { ...userSignInRequest });
    },
  });
}
