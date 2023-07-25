const Pagination = ({next, previous, setUrl}) => {
  return (
    <>
    <div className="grid grid-flow-col bg-slate-600">
      {previous &&
        <button onClick={() => setUrl(previous)}>
          Previous  
        </button>}

      {next &&
        <button onClick={() => setUrl(next)}>
          Next
        </button>}
    </div>
    </>
  )
}

export default Pagination