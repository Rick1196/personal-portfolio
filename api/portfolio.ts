import { Session } from "@supabase/supabase-js";
import { routes } from "@utils/consts";
import { customFetch } from "@utils/fetch";

const portfolioAPI = {
  user: {
    set: (body: { event: any; session: Session | null }) => {
      return customFetch(routes.auth.set, "POST", body);
    },
    remove: () => {
      return customFetch(routes.auth.remove, "POST");
    },
    getPermissions: async (email: string) => {
      const myHeaders = new Headers();
      myHeaders.append("email", email);
      return (
        await customFetch(routes.user.getPermissions, "GET", {}, myHeaders)
      )
        .json()
        .then((data: any) => data.permissions?.[0]?.privileges);
    },
    setDefaultPermissions: async (email: string) => {
      const myHeaders = new Headers();
      myHeaders.append("email", email);
      return (
        await customFetch(
          routes.user.setDefaultPermissions,
          "POST",
          {},
          myHeaders
        )
      )
        .json()
        .then((data: any) => data.permissions?.[0]?.privileges);
    },
  },
};

export default portfolioAPI;
