import { useEffect, useRef } from "react";

const Modal = ({ children, onModalOpen, onSetModalOpen }) => {
  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !onModalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      onSetModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!onModalOpen || keyCode !== 27) return;
      onSetModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="mx-auto py-20 container">
        <button
          ref={trigger}
          onClick={() => onSetModalOpen(true)}
          className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
        >
          Open Modal
        </button>
        <div
          className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            onModalOpen ? "block" : "hidden"
          }`}
        >
          {children}
          {/* <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="bg-white dark:bg-dark-2 px-8 md:px-[70px] py-12 md:py-[60px] rounded-[20px] w-full max-w-[570px] text-center"
          >
            <h3 className="pb-[18px] font-semibold text-dark text-xl sm:text-2xl dark:text-white">
              Your Message Sent Successfully
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span>
            <p className="mb-10 text-base text-body-color dark:text-dark-6 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <div className="flex flex-wrap -mx-3">
              <div className="px-3 w-1/2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="block border-stroke hover:bg-red-600 p-3 border hover:border-red-600 rounded-md w-full font-medium text-base text-center text-dark hover:text-white dark:text-white transition"
                >
                  Cancel
                </button>
              </div>
              <div className="px-3 w-1/2">
                <button className="block border-primary bg-primary hover:bg-blue-dark p-3 border rounded-md w-full font-medium text-base text-center text-white transition">
                  <a href={`/#`}> View Details </a>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
