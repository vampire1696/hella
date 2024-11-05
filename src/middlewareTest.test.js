import { middleware } from "./middleware";
import { jwtVerify } from "jose";

jest.mock("jose");

describe("Middleware", () => {
  it("should redirect to login if the token is invalid", async () => {
    const req = {
      nextUrl: new URL("https://localhost:3000/protected"),
      cookies: {
        get: (name) => ({
          value: "invalid-token", // invalid token
        }),
      },
      url: "https://localhost:3000/protected",
      headers: {
        get: () => null,
      },
    };

    jwtVerify.mockImplementation(() =>
      Promise.reject(new Error("Invalid token"))
    );

    const response = await middleware(req);

    expect(response).toEqual(Response.redirect(new URL("/login", req.url)));
  });

  it("should redirect to homepage if the token is valid and accessing a protected page,users wont able to access login page", async () => {
    const req = {
      nextUrl: new URL("https://localhost:3000/login"), //
      cookies: {
        get: (name) => ({
          value: "valid", // Valid token
        }),
      },
      url: "https://localhost:3000/login",
      headers: {
        get: () => null,
      },
    };

    jwtVerify.mockImplementation(() => Promise.resolve(true));

    const response = await middleware(req);

    expect(response).toEqual(Response.redirect(new URL("/", req.url)));
  });
});
