import { VideoWidget as Video, RichText } from "apps/admin/widgets.ts";

interface Props {
  video01: Video;
  title01: string;
  content01: RichText;

  video02: Video;
  title02: string;
  content02: RichText;

  video03: Video;
  title03: string;
  content03: RichText;
}

function MiddleVideo({ 
  video01,
  title01,
  content01,
  video02,
  title02,
  content02,
  video03,
  title03,
  content03
 }: Props) {
  return(
    <>
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 container mx-auto">
      <div class="relative">
        <div class="p-6"> 
          <h2 class="text-4xl lg:text-6xl py-4 text-[#de8f75] font-bold">{title01}</h2>
          <div class="text-sm leading-5 mb-9 text-gray-800" dangerouslySetInnerHTML={{ __html: content01 }}></div>
        </div>

        <video autoplay muted loop>
          <source src={video01} type="video/mp4" />
        </video>
      </div>

      <div class="relative">
        <video autoplay muted loop>
          <source src={video02} type="video/mp4" />
        </video>

        <div class="p-6">
          <h2 class="text-4xl lg:text-6xl py-4 text-[#de8f75] font-bold">{title02}</h2>
          <div class="text-sm leading-5 mb-9 text-gray-800" dangerouslySetInnerHTML={{ __html: content02 }}></div>
        </div>
      </div>

      <div class="relative">
        <div class="p-6">
          <h2 class="text-4xl lg:text-6xl py-4 text-[#de8f75] font-bold">{title03}</h2>
          <div class="text-sm leading-5 mb-9 text-gray-800" dangerouslySetInnerHTML={{ __html: content03 }}></div>
        </div>

        <video autoplay muted loop>
          <source src={video03} type="video/mp4" />
        </video>
      </div>
    </div>
    </>
  )
}

export default MiddleVideo;