import { supabase } from "@utils/supabase";
import { supabase as supabaseConsts } from "@utils/consts";
export default async function defaultPermissions(req: any, res: any) {
  try {
    const user = req.headers.email;
    const { data, error } = await supabase
      .from(supabaseConsts.tables.USER_PRIVILEGES)
      .insert([
        {
          user,
          privileges: ["read/basic"],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);
    if (error) {
      console.error(error);
      throw new Error(JSON.stringify(error));
    } else {
      res.status(200).json({
        data,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}
