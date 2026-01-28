import { auth } from "@clerk/nextjs/server";

export type Roles = "admin" | "teacher" | "student" | "parent";

export const checkRole = async (role: Roles) => {
  const { sessionClaims } = await auth();
  const userRole = sessionClaims?.metadata?.role;
  
  if (Array.isArray(userRole)) {
    return userRole.includes(role);
  }
  
  return userRole === role;
};

export const getRoles = async () => {
  const { sessionClaims } = await auth();
  const userRole = sessionClaims?.metadata?.role;
  
  if (!userRole) return [];
  return Array.isArray(userRole) ? userRole : [userRole];
};
