import { authMiddleware } from "@clerk/nextjs/server";
 
export default authMiddleware({
  publicRoutes: ["/api/webhooks(.*)", "/api/webhook/clerk", "/"],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/api/webhook/clerk", "/"]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};