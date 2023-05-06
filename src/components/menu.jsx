export function Menu(){
return (
  <>
    <div className=" font-bold flex justify-end  mr-3 px-1 sticky bottom-4 right-10 ">
      <div className="grid grid-rows gap-2 w-[60%] md:w-[30%]">
        <button className="bg-darkblue h-12 md:h-14 text-white rounded-md ">
          Sales By Subscribers
        </button>
        <button className="bg-darkorange h-12 md:h-14 text-white rounded-md">
          Notices & Announcements
        </button>
        <button className="bg-midgrey md:h-14 h-12 text-darkblue rounded-md">
          Advertise With Us
        </button>
      </div>
    </div>
  </>
);



}