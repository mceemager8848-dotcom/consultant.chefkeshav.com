import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white py-4 sm:py-5">
      <div className="section-shell flex justify-center">
        {/* The source file can be cropped tighter so the logo appears larger. */}
        <Image
          src="/chefkeshav-logo.webp"
          width={2161}
          height={728}
          priority
          alt="chefkeshav"
          className="h-12 w-auto object-contain sm:h-14"
        />
      </div>
    </header>
  );
}
