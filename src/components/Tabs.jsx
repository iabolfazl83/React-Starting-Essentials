function Tabs({children, buttons, BtnsContainer= "menu"}) {
  return (
    <>
      <BtnsContainer>{buttons}</BtnsContainer>
      {children}
    </>
  )
}

export default Tabs;