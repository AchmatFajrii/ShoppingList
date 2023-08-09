const Info = (props) => {
  return (
    <>
      <div className="info flex justify-between items-center w-full py-[16px] px-0">
        <div className="info-total flex justify-center items-center text-gray-600 ">
          <p className="font-bold text-[13px] md:text-[16px]">Total List : {props.todoLength}</p>
        </div>

        <div className="info-total flex justify-center items-center text-gray-600">
          <p className="font-bold text-[13px] md:text-[16px]">Total Counts {props.totalCounts}</p>
        </div>

        <button
          onClick={props.setTodos}
          className="delete-all-button text-red-500 border-none text-[13px] p-2 font-bold md:text-[16px]"
        >
          Delete All List
        </button>
      </div>
    </>
  );
};

export default Info;
