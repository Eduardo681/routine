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

interface TaskState {
  tasks: Task[];
  error: boolean;
  loading: boolean;
  showSuccess: boolean;
}

interface Task {}
