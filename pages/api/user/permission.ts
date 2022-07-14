import { supabase } from "@utils/supabase";
import { supabase as supabaseConsts } from "@utils/consts";

export default async function getPermissions(req: any, res: any) {
  try {
    const token = req.headers.cookie;
    if (token) {
      const user = req.headers.email;
      const { data, error } = await supabase
        .from(supabaseConsts.tables.USER_PRIVILEGES)
        .select("privileges")
        .eq("user", user);
      res.status(200).json({
        permissions: data,
      });
      if (error) {
        console.error(error);
        throw new Error(JSON.stringify(error));
      }
      res.status(200).json({
        data,
      });
    } else {
      console.error("Not session");
      res.status(401).json({ message: "Not session" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}
