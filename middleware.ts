import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // หน้าที่ไม่ต้องการ authentication
  const publicPaths = ['/login', '/register'];
  
  // ตรวจสอบว่าเป็นหน้า public หรือไม่
  const isPublicPath = publicPaths.includes(pathname);

  // ดึง token จาก cookie
  const token = request.cookies.get('auth-token')?.value;

  // ถ้าไม่มี token และพยายามเข้าถึงหน้าที่ต้องล็อกอิน
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // ถ้ามี token แล้วพยายามเข้าหน้า login หรือ register
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// กำหนดว่า middleware จะทำงานกับ path ไหนบ้าง
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};