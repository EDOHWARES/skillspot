import { Link } from 'react-router';
import submission_success_img from '../../../../assets/images/submission_success_img.png';
import './SubmissionSuccessful.css';

const SubmissionSuccessful = () => {
  return (
    <section className="fixed flex bottom-0 top-0 w-full p-4 mx-auto bg-black bg-opacity-80 h-full z-50">
    <div className="shadow w-full bg-white flex items-center h-fit self-end flex-col gap-4 rounded-[9px] py-4 md:w-2/3 mx-auto">
      <img className="w-[90.66px]" src={submission_success_img} alt="logout img" />
      <h2 className="font-semibold text-[20px] text-#282828]">
        Registration Submitted!
      </h2>
      <p className="text-center text-[14px] font-normal text-[#6F7485]">
      Thank you for registering as a skilled <br /> worker with us. We will get back to you <br /> soon.
      </p>
      <button className="bg-[#282828] text-[16px] font-semibold text-white px-4 py-2 w-[224px] h-[52px] flex items-center justify-center rounded-[6px]">
        Okay
      </button>
    </div>
  </section>
  )
}

export default SubmissionSuccessful