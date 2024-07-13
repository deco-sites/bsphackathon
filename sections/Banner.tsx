import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image: ImageWidget;
  alt: string;
  link: string;
}

function Banner({image, alt, link}: Props) {
  return (
    <div class="w-full mb-8 lg:mb-20">
      <a href={link ?? "#"}>
        <Image 
          src={image ?? ""} 
          alt={alt ?? ""}
          width={1920}
          class="w-full" 
        />
      </a>
    </div>
  )
}

export default Banner