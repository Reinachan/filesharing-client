export interface User {
  user: {
    username: string;
    terminate: Date | null;
    permissions: Permissions;
  };
}

export interface Permissions {
  manage_users: boolean;
  upload_files: boolean;
  list_files: boolean;
  delete_files: boolean;
}
