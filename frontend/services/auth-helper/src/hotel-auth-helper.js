import { BehaviorSubject } from "rxjs";

export const auth$ = new BehaviorSubject({
  sessionToken: localStorage.getItem("hotel_token"),
  error: false,
  pending: false,
});

// This promise represents a request being made to some backend to have the user validated and logged in
// but is mocked here for convenience. I don't want to have to setup a backend just for this example.
const GET_LOGGED_IN = (username, password) =>
  new Promise((resolve, reject) => {
    auth$.next({
      sessionToken: null,
      error: false,
      pending: true,
    });
    setTimeout(() => {
      if (username === "exampleuser" && password === "examplepassword") {
        const sessionToken = "abc123def456";
        localStorage.setItem("sessionToken", sessionToken);
        resolve({
          sessionToken,
          error: false,
          pending: false,
        });
      } else {
        // Why resolve when invalid? Because the "backend" provided a valid response
        resolve({
          sessionToken: null,
          error: "Invalid user or password",
          pending: false,
        });
      }
    }, 2500);
  });

export function login(token, user) {
  if (!auth$.value.pending) {
    localStorage.setItem("hotel_token", token);
    localStorage.setItem("hotel_user", user);
  }
}

export function logout() {
  // Trigger side-effects
  localStorage.removeItem("hotel_token");
  localStorage.removeItem("hotel_user");
  auth$.next({
    sessionToken: null,
    error: false,
  });
}
