"use server";

import { ID, Query } from 'node-appwrite';
import { users } from '../appwrite.config';

export const createUser = async (user: CreateUserParams) => {
  const newUser = await users.create(
    ID.unique(),
    user.email,
    user.phone,
    undefined,
    user.name
  );

  try {
  } catch (error: any) {
    if (error && error?.code === 409) {
      const document = await users.list([Query.equal('email', user.email)]);
      return document?.users[0];
    }
  }
};
