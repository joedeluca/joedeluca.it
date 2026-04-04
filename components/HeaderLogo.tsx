import Link from "next/link"
import Image from "next/image"

export default function HeaderLogo() {
  return (
    <div className="w-full">
      <Link href="/" className="block w-full">
        <Image
          src="/joedeluca-copywriter.png"
          alt="Joe DeLuca — Deluxe International Copywriter™"
          width={800}
          height={200}
          className="w-full h-auto"
          priority
        />
      </Link>
    </div>
  )
}
