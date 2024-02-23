import { NextAuthOptions } from "next-auth";
import { PROVIDER_ATTRIBUTES_KEY, provider } from "src/lib/auth/auth-provider";
import { UserInfo } from "src/types/types";

export const authOptions: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  providers: [provider],
  callbacks: {
    // checks whether the user is allowed to sign in
    async signIn({ account }) {
      return Boolean(
        account?.provider === provider.id &&
        account.access_token &&
        account.id_token
      );
    },
    // defines how JWT is generated and used in session() callback as "token"
    async jwt({ token, account, profile }) {
      const profileItems = (profile as any)?.[PROVIDER_ATTRIBUTES_KEY];
      console.log("profileItems", profileItems);
      if (profile && profileItems) {
        let userDID: string;
        let user: UserInfo = {};
        userDID = profileItems.find((item: any) => typeof item.did === "string")?.did;
        user.email = profileItems.find((item: any) => typeof item.email === "string")?.email;
        user.country = profileItems.find((item: any) => typeof item.address === "string")?.address?.country;
        user.givenName = profileItems.find((item: any) => typeof item.givenName === "string")?.givenName;
        user.familyName = profileItems.find((item: any) => typeof item.familyName === "string")?.familyName;
        user.phoneNumber = profileItems.find((item: any) => typeof item.phoneNumber === "string")?.phoneNumber;
        user.postalCode = profileItems.find((item: any) => typeof item.postalCode === "string")?.postalCode;
        user.streetAddress = profileItems.find((item: any) => typeof item.streetAddress === "string")?.streetAddress;
        user.locality = profileItems.find((item: any) => typeof item.locality === "string")?.locality;
        user.birthdate = profileItems.find((item: any) => typeof item.birthdate === "string")?.birthdate;
        user.gender = profileItems.find((item: any) => typeof item.gender === "string")?.gender;

        token = {
          ...token,
          user,
          ...(userDID && { userId: userDID }),
        };
      }
      console.log("token", token);
      if (account) {
        token = {
          ...token,
          ...(account?.access_token && { accessToken: account.access_token }),
          ...(account?.id_token && { idToken: account.id_token }),
        };
      }

      return token;
    },
    // session is persisted as an HttpOnly cookie
    async session({ session, token }) {
      return {
        ...session,
        ...(token.user && { user: { ...session.user, ...token.user } }),
        ...(token.accessToken && { accessToken: token.accessToken }),
        ...(token.idToken && { idToken: token.idToken }),
        ...(token.userId && { userId: token.userId }),
      };
    },
  },
};
