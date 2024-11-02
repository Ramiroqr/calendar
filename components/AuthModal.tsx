
import Image from "next/image";
import { Button } from "./ui/button";
import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTrigger,
} from "./ui/dialog";
import { signIn } from "@/app/lib/auth";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButtons";


export default function AuthModal() {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button>Try for Free</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[360px]">
            <DialogHeader className="flex flex-row justify-center items-center gap-2">
                <Image 
                    src="/logo.png" 
                    alt="logo"
                    width={20}
                    height={20}
                    className="size-10"
                />
                <h4 className="text-3xl font-semibold">
                    Cal<span className="text-primary">Marshal</span>
                </h4>
            </DialogHeader>

            <div className="flex flex-col mt-5 gap-3">
                <form 
                    action={async () => {
                        "use server"
                        await signIn("google")

                    }}
                    className="w-full"
                >
                    <GoogleAuthButton />
                </form>
                
                <form
                    action={async () => {
                        "use server"
                        await signIn("github")
                    }}
                >
                    <GitHubAuthButton />
                </form>
            </div>
        </DialogContent>
    </Dialog>
  )
}
