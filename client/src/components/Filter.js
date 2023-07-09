const Filter = ( { newFilter, handleTimeStampChange } ) => {
    return (
      <form>
        At timestamp <input
          value={newFilter}
          onChange={handleTimeStampChange}
        /> second
      </form>
    )
  }

  export default Filter