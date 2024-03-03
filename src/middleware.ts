import { withAuth } from "next-auth/middleware";

export default withAuth({
  secret: 'Ii7F1XGc7smdf8+tGLBeE3zzVGVLeRWdgEQa38Nx9FE',
});
export const config = {
  matcher: ["/account", '/account/:path*']
};