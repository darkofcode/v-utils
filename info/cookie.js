import cookie from "cookie";

const setCookie = (res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("authShortToken", code, {
      httpOnly: true,
      maxAge: 60 * 3, // 3 minutes
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    })
  );
};
