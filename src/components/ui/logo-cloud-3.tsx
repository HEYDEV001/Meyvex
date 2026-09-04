import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  onDark?: boolean;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} reverse duration={40} durationOnHover={80}>
        {logos.map((logo) =>
          logo.onDark ? (
            <div
              className="flex items-center rounded-md bg-[#232323] px-3 py-1.5"
              key={`logo-${logo.alt}`}
            >
              <Image
                alt={logo.alt}
                className="pointer-events-none h-7 w-auto select-none md:h-9"
                height={logo.height}
                loading="lazy"
                src={logo.src}
                width={logo.width}
              />
            </div>
          ) : (
            <Image
              alt={logo.alt}
              className="pointer-events-none h-7 w-auto select-none md:h-9"
              height={logo.height}
              key={`logo-${logo.alt}`}
              loading="lazy"
              src={logo.src}
              width={logo.width}
            />
          )
        )}
      </InfiniteSlider>
    </div>
  );
}
