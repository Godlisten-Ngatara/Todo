import React from 'react'

function DropDownItem({children, onSelect}) {
  return (
    <li className="hover:bg-gray-300 rounded-lg px-4 py-2" onClick={onSelect}>{children}</li>
  )
}

export default DropDownItem