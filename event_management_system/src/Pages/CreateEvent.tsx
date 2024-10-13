const CreateEvent = () => {
  return (
    <>
      {/*Header and Paragraph */}
      <div className="mb-6 text-white">
        <h1 className="text-2xl font-bold">
          Ready to create your first event ?
        </h1>
        <p className="text-gray-600 text-[#FFFFFFCC]">
          Click the icon below to start.
        </p>
      </div>

      {/* add event card */}
      <div className="  flex justify-center items-center w-96 h-32 bg-[#25252582] hover:bg-[#41404082] text-[#FFF] rounded-[10px] ">
        <div className="flex flex-col items-center space-y-4">
          <div className="">
            <svg
              width="15"
              height="15"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.375 5.62402H5.625V9.37402H4.375V5.62402H0.625V4.37402H4.375V0.624023H5.625V4.37402H9.375V5.62402Z"
                fill="#FFF"
              />
            </svg>
          </div>
          <p className="text-[24px] font-[400]">Add New</p>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
