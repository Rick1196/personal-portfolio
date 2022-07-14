import cookie from 'cookie';

export default async function handler(req:any, res:any) {
    res.setHeader('Set-Cookie', [
        cookie.serialize("sb-access-token", "false", {
          httpOnly: true,
          secure: true,
          sameSite: true,
          maxAge: 5,
          path: "/",
        })
      ]);
    res.setHeader('Set-Cookie', ['sb-access-token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT', 'sb-refresh-token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT']);
    return res.status(200).send({});
}