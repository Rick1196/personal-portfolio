export const supabase = {
  tables: {
    USER_PRIVILEGES: "user_privileges",
  },
};

const routePrefix = "/api";

export const routes = {
  auth: {
    set: `${routePrefix}/auth/set`,
    remove: `${routePrefix}/auth/remove`,
  },
  user: {
    getPermissions: `${routePrefix}/user/permission`,
    setDefaultPermissions: `${routePrefix}/user/default_permissions`,
  },
};

export const root = "http://localhost:3000";
