import React from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import type { NextPage } from "next";
import { logOut } from "@components/login/utils";
import useLogout from "@components/login/useLogout";

const Dashboard: NextPage<any> = ({ user }) => {
  const [logout] = useLogout();

  return (
    <div>
      <h1>Welcome {user.user_metadata.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export async function getServerSideProps(context: any) {
  let supabaseToken = context.req.cookies["sb-access-token"];
  if (!supabaseToken) {
    throw new Error(
      "It should not happen! Since this page is guarded by _middlware.ts the presense of supabase token cookie (sb:token) should be already checked"
    );
  }
  return {
    props: {
      //we do not need to verify JWT signature since it has been already done in _middlware.ts
      user: jwt.decode(supabaseToken),
    },
  };
}
export default Dashboard;
