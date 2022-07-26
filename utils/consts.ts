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

export const cookieNames = {
  permissions: 'permissions',
}

export const envValues = {
  secretKey = 'ULTRA_SUPER_SECRET_ATNTS_THAT_ARE_NOT_SECRET'
}
export const root = "http://localhost:3000";
