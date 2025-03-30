

const Manager = () => {
  return (
    <div>
      <div className=" bg-slate-800 mycontainer">
        <h1>PassOp</h1>
        <p>your own password manager</p>
        <div className="text-white flex flex-col p-4">
          <input className="rounded-full" type="text" />
          <div className="flex">
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
