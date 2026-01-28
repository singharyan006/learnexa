export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "admin" | "teacher" | "student" | "parent" | ("admin" | "teacher" | "student" | "parent")[];
    };
  }
}
