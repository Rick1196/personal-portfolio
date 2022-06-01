import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { supabase } from "@utils/supabase";
import { NextResponse } from "next/server";


export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  //The line below isn't working as expected, see README.tx
  //let authResult = await supabase.auth.api.getUserByCookie(req)
  const root = 'http://localhost:3000'
  let authResult = await getUser(req.headers.get('Cookie')?.replace('sb-access-token=','').split(';')[0]);
  if (authResult.error) {
    console.log("Authorization error, redirecting to login page", authResult.error)
    return NextResponse.redirect(root)
  } else if (!authResult.user) {
    console.log("No auth user, redirecting")
    return NextResponse.redirect(root)
  } else {
    console.log("User is found", authResult.user)
    return NextResponse.next()
  }
}

async function getUser(token:string|undefined): Promise<any> {
    if (!token) {
      return ;
    }
    let authRequestResult = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          APIKey: process.env.NEXT_PUBLIC_SUPABASE_KEY || "",
        },
      }
    );
    // console.log("result", authRequestResult);
    let result = await authRequestResult.json();
    if (authRequestResult.status !== 200) {
      return {
          user: {
            user: null,
            data: null,
            error: `Supabase auth returned ${authRequestResult.status}. See logs for details`,
          },
      };
    } else {
      return {
          user: result,
          data: result,
          error: null,
      };
    }
}