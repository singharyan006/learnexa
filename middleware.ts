import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define which routes are for which roles
const isTeacherRoute = createRouteMatcher(["/teacher(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isStudentRoute = createRouteMatcher(["/student(.*)"]);
const isParentRoute = createRouteMatcher(["/parent(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  // 1. If not authenticated, let Clerk handle sign-in redirect for protected routes
  // (Assuming all dashboard routes are protected)
  if (!userId && (isTeacherRoute(req) || isAdminRoute(req) || isStudentRoute(req) || isParentRoute(req))) {
    return redirectToSignIn();
  }

  // 2. Get the user's role from Clerk metadata (handle string or array)
  const metadataRole = sessionClaims?.metadata?.role;
  const roles = Array.isArray(metadataRole) ? metadataRole : (metadataRole ? [metadataRole] : []);

  // 3. Strict Role Isolation logic
  // If user is trying to access ANY dashboard route
  if (isTeacherRoute(req) || isAdminRoute(req) || isStudentRoute(req) || isParentRoute(req)) {
    
    // Check if the current route matches any of the user's roles
    const hasAdminAccess = roles.includes("admin") && isAdminRoute(req);
    const hasTeacherAccess = roles.includes("teacher") && isTeacherRoute(req);
    const hasStudentAccess = roles.includes("student") && isStudentRoute(req);
    const hasParentAccess = roles.includes("parent") && isParentRoute(req);

    const hasAccessToCurrentRoute = hasAdminAccess || hasTeacherAccess || hasStudentAccess || hasParentAccess;

    if (!hasAccessToCurrentRoute) {
      // If they don't have access to the current route, redirect them to the first one they DO have access to
      if (roles.includes("admin")) return NextResponse.redirect(new URL("/admin", req.url));
      if (roles.includes("teacher")) return NextResponse.redirect(new URL("/teacher", req.url));
      if (roles.includes("student")) return NextResponse.redirect(new URL("/student", req.url));
      if (roles.includes("parent")) return NextResponse.redirect(new URL("/parent", req.url));

      // If they have no valid roles, redirect to home
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
