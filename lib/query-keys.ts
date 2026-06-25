export const queryKeys = {
  auth: {
    me: ["auth", "me"] as const,
  },
  users: {
    all: ["users", "list"] as const,
    detail: (id: string) => ["users", "detail", id] as const,
  },
} as const;
