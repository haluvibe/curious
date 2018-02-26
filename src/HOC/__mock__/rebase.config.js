let mockAuth, mockSignInWithEmailAndPassword, mockApp;

const setupMockApp = () => {
  mockAuth = jest.fn();
  mockSignInWithEmailAndPassword = jest.fn();
  mockApp = {
    auth: mockAuth,
    signInWithEmailAndPassword: mockSignInWithEmailAndPassword
  };
  mockAuth.mockImplementation(() => mockApp);
  mockSignInWithEmailAndPassword.mockImplementation(async () => {
    process.nextTick(() => {
      return { user: "user" };
    });
  });
};

setupMockApp();

export default {
  app: mockApp
};
