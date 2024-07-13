import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  title?: string;
  items:{
    title?: string;
    image?: ImageWidget;
    content?: TextArea;
    link?: string;
  }[]
}
function ColorContent({title, items}: Props) {
  return (
    <div class="lg:grid-cols-1 w-full gap-2 lg:gap-0 lg:py-36 bg-[#8479a4] p-4">
      <div class="container">

      <h2 class="text-4xl lg:text-7xl py-4 text-[#f6b968] font-bold pb-6 lg:pb-12">{title}</h2>

        {items?.map((item) => (
          <div class={`relative lg:min-h-64 px-4 py-6 lg:py-12 group transition ease-in-out duration-500 border-t-2 border-white`}>
            <a href={item.link ?? "#"}>
              <div class="w-full container grid grid-cols-1 lg:grid-cols-3 justify-between items-center">
                <h3 class=" text-2xl lg:text-7xl py-4 text-white font-bold">{item.title}</h3>
                <div class="relative">
                  <Image 
                    src={item?.image ?? ""} 
                    alt={item.title}
                    width={480}
                    class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/3 group-hover:lg:-translate-y-1/2 w-full lg:w-80 h-auto z-10 lg:invisible group-hover:lg:visible group-hover:block transition-all ease-in-out duration-500 lg:opacity-0 group-hover:lg:opacity-100" 
                  />
                </div>
                <div 
                  dangerouslySetInnerHTML={{ __html: item.content ?? "" }}
                  class=" text-base lg:text-xl text-white py-4"
                ></div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorContent;