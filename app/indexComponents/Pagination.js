const Pagination = ({next, previous, setUrl}) => {
  return (
    <>
    <div className="place-items-start px-5 py-1">
      {previous &&
        <button className="bg-slate-600 rounded-md px-2 mx-1" onClick={() => setUrl(previous)}>
          Previous  
        </button>}

      {next &&
        <button className="bg-slate-600 rounded-md px-2 mx-1" onClick={() => setUrl(next)}>
          Next
        </button>}
    </div>
    </>
  )
}

export default Pagination