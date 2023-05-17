const Pagination = ({next, previous, setUrl}) => {
  return (
    <>
    {previous &&
      <button onClick={() => setUrl(previous)}>
        Previous  
      </button>}

    {next &&
      <button onClick={() => {setUrl(next)}}>
        Next
      </button>}
    </>
  )
}

export default Pagination