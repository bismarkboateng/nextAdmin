"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User, Product } from "./models";
import { connectToDB } from "./utils";
import { signIn } from "@/app/auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    throw new Error("Faild to add user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach((key) => {
      (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key];
    });

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("Faild to update user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    throw new Error("Faild to add product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach((key) => {
      (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key];
    });

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("Faild to update product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete product");
  }

  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete user");
  }

  revalidatePath("/dashboard/users");
};


export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn("credentials", { username, password })
  } catch (error) {
    throw new Error("Failed to login!")
  }
}