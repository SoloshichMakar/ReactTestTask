export const fakeAuth = {
  isAuthenticated: false,
  authenticate(email: string, password: string) {
    if (email === 'demo' && password === 'demo') {
      fakeAuth.isAuthenticated = true;
    }
  },
  signout() {
    fakeAuth.isAuthenticated = false;
  },
};
