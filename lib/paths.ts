/** Chemins relatifs à NEXT_PUBLIC_API_URL (sans slash final). */
export const paths = {
  authLogin: "/auth/login",
  authLogout: "/auth/logout",
  authMe: "/auth/me",
  authRefresh: "/auth/refresh",
  authRegister: "/auth/register",
  authRegisterInvite: "/auth/register/invite",
  authInvitation: "/auth/invitation",
  authInvitationVerify: "/auth/invitation/verify",
  formulaire: "/formulaire",
  /** GET — même handler que `/formulaire/telecharger` côté Nest. */
  formulaireExport: "/formulaire/export",
  users: "/users",
} as const;
