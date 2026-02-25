"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

/* ── ダミーユーザーデータベース ── */
type User = {
  id: string;
  name: string;
  email: string;
};

const DUMMY_USERS: (User & { password: string })[] = [
  {
    id: "testuser",
    password: "password123",
    name: "テスト太郎",
    email: "test@example.com",
  },
];

/* ── Context 型 ── */
type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (id: string, password: string) => { ok: boolean; error?: string };
  register: (data: {
    id: string;
    password: string;
    name: string;
    email: string;
  }) => { ok: boolean; error?: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "auth_user";
const STORAGE_VERSION = 1;

type StoredAuth = {
  version: number;
  user: User;
};

/* ── Provider ── */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 初回マウント時に localStorage から復元
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const stored: StoredAuth = JSON.parse(raw);
        if (stored.version === STORAGE_VERSION) {
          setUser(stored.user);
        } else {
          // スキーマ不一致 → 破棄
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      /* ignore */
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(
    (id: string, password: string): { ok: boolean; error?: string } => {
      const found = DUMMY_USERS.find(
        (u) => u.id === id && u.password === password
      );
      if (!found) return { ok: false, error: "ユーザーIDまたはパスワードが正しくありません" };
      const { password: _, ...userData } = found;
      setUser(userData);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ version: STORAGE_VERSION, user: userData }),
      );
      return { ok: true };
    },
    []
  );

  const register = useCallback(
    (data: {
      id: string;
      password: string;
      name: string;
      email: string;
    }): { ok: boolean; error?: string } => {
      if (DUMMY_USERS.some((u) => u.id === data.id)) {
        return { ok: false, error: "このユーザーIDはすでに使用されています" };
      }
      const newUser = { ...data };
      DUMMY_USERS.push(newUser);
      const { password: _, ...userData } = newUser;
      setUser(userData);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ version: STORAGE_VERSION, user: userData }),
      );
      return { ok: true };
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/* ── Hook ── */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
