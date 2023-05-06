import PropTypes from "prop-types";

export function Item(props) {

  // destructure properties
  const { name, logo, unread } = props.item;

  return (
    <div className="bg-white shadow-2xl shadow-gray-950/25 mx-auto rounded-lg w-[88%] md:w-[70%] h-16 mb-2 pt-5 p-6 grid grid-cols-12">
      <div className="flex justify-center items-center">
        <img
          className="col-span-3 h-9"
          // concatenate url
          src={`https://global.mcarfix.com/AdvertImages/${logo}`}
        />
      </div>
      <p className="col-span-9 text-center text-darkblue">
        {name.toUpperCase()}
      </p>

      <button className="rounded-full h-7 w-7 bg-darkorange text-white font-bold">
        {unread}
      </button>
    </div>
  );
}


//give prop defintions for autocomlpete support
Item.propTypes = {
  item:{
  name: PropTypes.string,
  logo: PropTypes.string,
  unread: PropTypes.number,
}
};
