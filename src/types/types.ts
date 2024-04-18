interface UserState {
  logged: boolean;
  token: string | null;
  error: boolean;
  loading: boolean;
  name: string | null;
  showSuccess: boolean;
}

interface LoginResponse {
  data: {
    token: string;
    user: {
      name: string;
    };
  };
  message: string | null;
}
