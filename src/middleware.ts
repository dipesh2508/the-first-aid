import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/api/webhooks(.*)", "/"],
  ignoredRoutes: ["/api/webhooks(.*)"],
});

export const config = {
  publicRoutes: ["/api/webhooks(.*)", "/"],
  ignoredRoutes: ["/api/webhooks(.*)"],
  matcher: ["/((?!.+.[w]+$|_next).*)", "/(api|trpc)(.*)"],
};
