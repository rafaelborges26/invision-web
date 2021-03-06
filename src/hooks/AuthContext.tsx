import React, { createContext, useCallback, useState, useContext } from 'react';

interface User {
  id?: string;
  name?: string;
  email: string;
  password: string; // declarado só para fazer o fake user
}

interface SignInCredentials {
  email: string;
  password: string;
  name?: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): void;
}

interface AuthState {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthInvision: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    // quando o user sair e voltar pro site
    const token = localStorage.getItem('@Invision.token');
    const user = localStorage.getItem('@Invision.user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(({ email, password }) => {
    // setando um user de exemplo
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    const user: User = {
      email,
      password,
    };

    localStorage.setItem('@Invision.token', token);
    localStorage.setItem('@Invision.user', JSON.stringify(user));
    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export default AuthInvision;
