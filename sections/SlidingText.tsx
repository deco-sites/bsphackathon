function SlidingText() {
  return(
    <div class="h-[280px] w-full overflow-hidden relative my-8 lg:my-24">
      <div class="flex items-center w-auto h-[280px] absolute animate-slidingfast whitespace-nowrap">
        <span class="block w-1/2 text-[200px] font-bold px-8 text-gray-300">Linda</span>
        <span class="block w-1/2 text-[200px] font-bold px-8 text-gray-300">Estilosa</span>
        <span class="block w-1/2 text-[200px] font-bold px-8 text-gray-300">Maravilhosa</span>
        <span class="block w-1/2 text-[200px] font-bold px-8 text-gray-300">Casual</span>
        <span class="block w-1/2 text-[200px] font-bold px-8 text-gray-300">Charmosa</span>
      </div>
    </div>
  )
}

export default SlidingText;