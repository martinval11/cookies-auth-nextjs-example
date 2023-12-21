'use client';

import { createAccount } from './actions/createAccount';

export default function Home() {
  return (
    <form action={createAccount}>
      <h1>Sign Up</h1>

      <label>
        Username
        <input
          type='text'
          name='username'
          placeholder='Type here your username'
          autoComplete='off'
          required
        />
      </label>

      <label>
        Email
        <input
          type='email'
          name='email'
          placeholder='Type here your email'
          autoComplete='off'
          required
        />
      </label>

      <label>
        Password
        <input
          type='password'
          name='password'
          placeholder='Type here your password'
          autoComplete='off'
          required
        />
      </label>

      <input type='submit' value='Submit' />
    </form>
  );
}
