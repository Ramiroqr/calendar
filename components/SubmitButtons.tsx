"use client"

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"
import Image from "next/image"
import { Loader2 } from "lucide-react"



export function GoogleAuthButton() {
    const { pending } = useFormStatus()

  return (
    <>
        { pending 
            ?
                <Button disabled variant="outline" className="w-full">
                    <Loader2 className="size-4 mr-2 animate-spin" />
                    Please Wait
                </Button>
            :   
                <Button variant="outline" className="w-full">
                    <Image 
                        src="/google.svg"
                        alt="Google logo"
                        width={20}
                        height={20}
                        className="size-4 mr-2"
                    />
                    Sign in with Google
                </Button>

        }
    </>
  )
}

export function GitHubAuthButton() {
    const { pending } = useFormStatus()

  return (
    <>
        { pending 
            ?
                <Button disabled variant="outline" className="w-full">
                    <Loader2 className="size-4 mr-2 animate-spin" />
                    Please Wait
                </Button>
            :   
                <Button variant="outline" className="w-full">
                    <Image 
                        src="/github.svg"
                        alt="Github logo"
                        width={20}
                        height={20}
                        className="size-4 mr-2"
                    />
                    Sign in with GitHub
                </Button>

        }
    </>
  )
}
