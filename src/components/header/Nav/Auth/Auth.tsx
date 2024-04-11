import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'
import { ButtonsAuthorized } from './ButtonsAuthorized';
import { Login } from './Login';

export const Auth = () => {
  const { data: session }: any = useSession();
  
  return (
    <>
    {session && session.user ? (
        <ButtonsAuthorized 
          signOut={signOut}
        />
      ) : (
            <Login 
              signIn={signIn}
            />
          )}
    </>
  )
}
