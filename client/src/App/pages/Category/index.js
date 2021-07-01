import React from 'react'

function Category() {
  React.useEffect(() => {
    alert('mounted')
  }, [])

  return (
    <div>
      <h1>Category</h1>
    </div>
  )
}

export default Category
