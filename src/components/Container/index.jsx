const Container = (props) => {
  return (
    <>
      <section className="container flex flex-col min-h-[350px] max-w-[500px] p-[16px] mx-auto border">
        {props.children}
      </section>
    </>
  );
};

export default Container;
