"use server";

import { User, IUser } from "../models/user.model";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function fetchUserById(userId: string) {
  try {
    connectToDB();

    return await User.findById(userId);
  }
  catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface IcreateUser {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  image: string;
  phone: string;
}

export async function createUser(userData: IcreateUser) {
  try {
    connectToDB();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

interface Params {
  clerkId: string;
  updateData: Partial<IUser>;
  path: string;
}

export async function updateUser(params: Params) {
  try {
    connectToDB();

    const { clerkId, updateData, path } = params;

    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

interface DeleteUserParams {
  clerkId: string;
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDB();

    const { clerkId } = params;

    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("User not found");
    }
    //  delete user from database
    // and question, answer, comment from database

    // get user id from user
    // const userQuestionIds = await Question.find({ author: user._id }).distinct(
    //   "_id"
    // );

    // delete question from database
    // @ts-ignore
    await Question.deleteMany({ author: user._id });

    // TODO: delete answer, answer from database

    // @ts-ignore
    const deletedUser = await User.findByIdAndDelete(user._id);
    return deletedUser;

    // finish delete user from database
    //
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// update user mpin
export async function updateUserMPin(
  userId: string,
  mpin: string,
  path: string
) {
  try {
    connectToDB();

    await User.findOneAndUpdate({ clerkId: userId }, { mpin });
    revalidatePath(path);
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

interface IUpdateUser {
  clerkId: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  gender: string;
  aadhar: string;
  path: string;
}
// update user
export async function updateUserProfile(params: IUpdateUser) {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { clerkId: params.clerkId },
      {
        name: params.name,
        email: params.email,
        phone: params.phone,
        username: params.username,
        gender: params.gender,
        aadhar: params.aadhar,
      }
    );
    revalidatePath(params.path);
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

// find user by username
export async function findUserByUsername(username: string) {
  try {
    connectToDB();

    const user = await User.findOne({ username });
    if (!user) return null;
    return user;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
