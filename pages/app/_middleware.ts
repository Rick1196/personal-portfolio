import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { supabase } from "@utils/supabase";
import { NextResponse } from "next/server";
import { root } from "@utils/consts";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  //The line below isn't working as expected, see README.tx
  const token = req.headers
    .get("Cookie")
    ?.replace("sb-access-token=", "")
    .split(";")[0];
  if (!token) {
    return NextResponse.redirect(root);
  }
  let authResult = await getUser(token);
  if (authResult.error) {
    return NextResponse.redirect(root);
  } else if (!authResult.user) {
    return NextResponse.redirect(root);
  } else {
    return NextResponse.next();
  }
}

async function getUser(token: string | undefined): Promise<any> {
  if (!token) {
    return;
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
