export interface ApiUser {
  id: number;
  login: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  public_repos: number;
  followers: number;
  bio: string | null;
  name: string | null;
  location: string | null;
  email: string | null;
}

export interface ApiSearchOutput {
  total_count: number;
  items: ApiUser[];
}
