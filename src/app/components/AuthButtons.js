"use client";

import {
  ClientSafeProvider,
  signIn,
  signOut,
} from "next-auth/react";

const buttonStyles =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

export function SignIn({ providers }) {
  return Object.values(providers).map((provider) => (
    <div key={provider.name}>
      <button
        onClick={() => signIn(provider.id)}
        type="button"
        className={buttonStyles}
      >
        Sign in with {provider.name}
      </button>
    </div>
  ));
}

export function SignOut() {
  return (
    <button onClick={() => signOut()} type="button" className={buttonStyles}>
      Sign Out
    </button>
  );
}
