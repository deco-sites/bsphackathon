import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
      { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
  },
}: Nav) {
  return (
    <div class="w-full overflow-hidden">
      <div class="w-full flex">
        <span class="w-[5%] h-3 bg-[#009b98]"></span>
        <span class="w-[10%] h-3 bg-[#f6b968]"></span>
        <span class="w-[15%] h-3 bg-[#fea376]"></span>
        <span class="w-[30%] h-3 bg-[#fe8797]"></span>
        <span class="w-[40%] h-3 bg-[#8479a4]"></span>
      </div>

      <nav class="drawer">
        <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

        {/* main content */}
        <div class="drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-4">
          
          <div class="items-center justify-between lg:flex w-full">
            <ul class="lg:w-1/2 hidden lg:flex">
              {navigation.links.map((link) => (
                <li>
                  <a
                    href={link.url}
                    aria-label={link.label}
                    class="link no-underline hover:underline p-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="/" class="lg:absolute lg:block lg:left-1/2 lg:-translate-x-1/2">
              <Image src={logo.src || ""} width={100} height={28} alt={logo.alt} />
            </a>

            <ul class="flex gap-3 lg:w-1/2 justify-end hidden lg:flex">
              {navigation.buttons?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href ?? "#"}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </ul>
          </div>

          <label
            htmlFor="mobile-drawer-nav"
            class="flex lg:hidden btn btn-ghost drawer-button"
          >
            <Icon id="Bars3" size={24} strokeWidth={0.1} />
          </label>
        </div>

        {/* sidebar */}
        <aside class="drawer-side z-50">
          {/* Close when clicking on overlay */}
          <label
            htmlFor="mobile-drawer-nav"
            aria-label="close sidebar"
            class="drawer-overlay"
          />

          <div class="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">

            <label for="mobile-drawer-nav" aria-label="close sidebar" class="drawer-overlay px-8 py-6 flex justify-end">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>  
            </label>
            <ul class="flex flex-col">
              {navigation?.links.map((link) => (
                <li class="">
                  <a href={link.url} aria-label={link.label} class="flex justify-between items-center text-primary text-xl px-8 py-4">
                    {link.label}
                    <span class="block w-[15px] h-[15px] rotate-45 border-r-2 border-t-2 border-solid border-primary ml-4"></span>
                  </a>
                </li>
              ))}
            </ul>

            <ul class="p-4 flex items-center gap-3">
              {navigation.buttons?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href ?? "#"}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </ul>
          </div>
        </aside>
      </nav>
    </div>
    
  );
}
