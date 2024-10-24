import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;


export const createUser = async (data) => {

  const { name, email, age, role, isActive, birthDate, password} = data;

  const user = await prisma.user.create({
    data: {
      name, 
      email,     
      age,       
      role,     
      isActive,  
      birthDate: new Date(birthDate),
      password
    }
  })

  return user;
}

export const getUsers = async (data) => {
  const users = await prisma.user.findMany({
    data
  })
  return users;
}

export const getById = async (data) => {
  const  id  = data
  const user = await prisma.user.findUnique({
    where: { id }
  })

  return user;
}

export const updateUser = async (id, data) => {

  const birthDate = data;

  if(birthDate !== undefined) data.birthDate = new Date(birthDate);
  
  const user = await prisma.user.update({
    where: { id },
    data
  })

  return user;
}

export const deleteUser = async (id) => {
  await prisma.user.delete({
    where: { id }
  })
  return;
}
