
import { signIn, signOut, auth } from "@/auth"
import { Button } from "../ui/button";
 
export default async function SignIn() {
    const session = await auth();
    console.log(session);
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", {redirectTo: "/dashboard"});
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  )
} 