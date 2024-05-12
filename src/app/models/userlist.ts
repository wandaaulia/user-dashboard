export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
}

export interface UserResponse {
  data: UserData;
  support: {
    url: string;
    text: string;
  };
}

export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
