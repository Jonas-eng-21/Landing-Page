function ArrowIcon() {
  return (
    <svg viewBox="0 0 451.846 451.847" className="w-5 h-5 mr-5">
      <path
        fill="#B9B9BE"
        d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
      />
    </svg>
  );
}

export function TransactionCard() {
  return (
    <div className="group relative flex w-[320px] h-[120px] rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:scale-105">
      <div className="relative flex h-full w-[130px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#28C888] transition-all duration-300 group-hover:w-full">
        <div className="absolute z-10 flex h-[46px] w-[70px] flex-col items-center rounded-md bg-[#E8F5E9] shadow-[9px_9px_9px_-2px_rgba(77,200,143,0.72)] transition-all group-hover:[animation:slide-top_1.2s_cubic-bezier(0.645,0.045,0.355,1)_both]">
          <div className="mt-[7px] h-[13px] w-[65px] rounded-sm bg-[#81C784]"></div>
          <div className="relative mt-[5px] h-2 w-2 -translate-x-4 rotate-90 rounded-full bg-[#237D31] shadow-[0_-10px_0_0_#1B5E1F,0_10px_0_0_#43A046]"></div>
        </div>

        <div className="absolute bottom-[10px] top-[120px] z-10 h-[75px] w-[63px] overflow-hidden rounded-md bg-[#dddde0] transition-all group-hover:[animation:slide-post_1s_cubic-bezier(0.165,0.84,0.44,1)_both]">
          <div className="absolute top-2 right-2 h-[9px] w-[47px] rounded-b-sm bg-[#545354] before:absolute before:top-[-8px] before:h-[9px] before:w-[47px] before:bg-[#757375] before:content-['']"></div>
          <div className="absolute top-[22px] right-2 h-[23px] w-[47px] rounded-sm bg-white">
            <div className="text-center font-sans text-base font-bold text-[#2E7D31] transition-all group-hover:[animation:fade-in-fwd_0.3s_1s_backwards]">
              $
            </div>
          </div>
          <div className="absolute top-[52px] left-[25px] h-3 w-3 -rotate-90 rounded-sm bg-[#838183] shadow-[0_-18px_0_0_#838183,0_18px_0_0_#838183]"></div>
          <div className="absolute top-[68px] left-[25px] h-3 w-3 -rotate-90 rounded-sm bg-[#aaa9ab] shadow-[0_-18px_0_0_#aaa9ab,0_18px_0_0_#aaa9ab]"></div>
        </div>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-between whitespace-nowrap overflow-hidden transition-all duration-300 group-hover:w-0 group-hover:opacity-0">
        <p className="font-sans text-[23px] ml-5 text-[#263238]">Agendamento</p>
        <ArrowIcon />
      </div>
    </div>
  );
}
