import React from 'react'

export default function modal(props) {
  const {setOpenModal, openModal} = props;

  if (!openModal) return null;

  return (
    <div>modal</div>
  )
}
