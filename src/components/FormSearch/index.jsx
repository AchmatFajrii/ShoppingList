const FormSearch = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit} className="form flex">
        <input
          onChange={props.targetValue}
          value={props.value}
          className="input flex-1 mr-[8px] shadow-lg border-none rounded-lg p-[10px] text-slate-700 text-[16px] font-semibold"
          type="text"
          placeholder="List"
        />
        <button
          className="button border-none rounded-lg text-white text-[16px] font-bold uppercase w-[80px] bg-blue-500 shadow-lg"
          type="submit"
        >
          add
        </button>
      </form>
    </>
  );
};

export default FormSearch;
