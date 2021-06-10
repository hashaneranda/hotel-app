import { BehaviorSubject } from "rxjs";

export const auth$ = new BehaviorSubject({
  sessionToken: localStorage.getItem("hotel_token")
    ? JSON.parse(localStorage.getItem("hotel_token"))
    : null,
  user: localStorage.getItem("hotel_user")
    ? JSON.parse(localStorage.getItem("hotel_user"))
    : null,
  error: false,
  pending: false,
});

export function login(token, user) {
  if (!auth$.value.pending) {
    localStorage.setItem("hotel_token", JSON.stringify(token));
    localStorage.setItem("hotel_user", JSON.stringify(user));

    auth$.next({
      sessionToken: token,
      error: false,
    });
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
