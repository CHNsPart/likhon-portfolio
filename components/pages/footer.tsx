import { LinkedInLogoIcon, EnvelopeClosedIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-zinc-100 border-t">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/asiflikhon11" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubLogoIcon className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </Link>
            <Link href="https://linkedin.com/in/asiflikhon11" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInLogoIcon className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </Link>
            <Link href="mailto:asif.shariar11@gmail.com" aria-label="Email">
              <EnvelopeClosedIcon className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </Link>
          </div>
          <p className="flex flex-col md:flex-row items-center justify-center mt-4 sm:mt-0 text-sm text-gray-500">
            © {new Date().getFullYear()} Asif Shariar Likhon. All rights reserved. 
            <Image
              src="/likhon.png"
              alt="Asif Shariar Likhon"
              width={50}
              height={50}
              className="inline-block ml-2"
            />
          </p>
        </div>
      </div>
    </footer>
  )
}

