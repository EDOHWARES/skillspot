import "./Success.css";

interface SuccessPropTypes {
  message: string;
  img: string;
  hideModal: () => void;
}

const Success: React.FC<SuccessPropTypes> = ({ hideModal, message, img }) => {
  return (
    <section className="fixed flex bottom-0 top-0 w-full p-4 mx-auto bg-black bg-opacity-80 h-full z-50">
      <div className="shadow w-full bg-white flex items-center h-fit self-end flex-col gap-4 rounded-[9px] py-4 md:w-2/3 mx-auto">
        <img className="w-[90.66px]" src={img} alt="logout img" />
        <h2 className="font-semibold text-[20px] text-#282828]">
          {message}
        </h2>
        <button
          onClick={hideModal}
          className="bg-[#282828] cursor-pointer text-[16px] font-semibold text-white px-4 py-2 w-[224px] h-[52px] flex items-center justify-center rounded-[6px]"
        >
          Okay
        </button>
      </div>
    </section>
  );
};

export default Success;
