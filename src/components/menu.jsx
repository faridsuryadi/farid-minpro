import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Stack,
  } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

  export const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
  return (
    <>
      <Button ref={btnRef} bg={"transparent"} color={"black"} fontWeight={"bold"} onClick={onOpen}>
        <HamburgerIcon boxSize={6} color={"white"}/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Kategori</DrawerHeader>

          <DrawerBody>
            <Stack>
              <NavLink to={"/"}>
            <Button  onClick={onClose} justifyContent={"left"} w={"100%"} fontWeight={"bold"}>Beranda</Button>
              </NavLink>
              <NavLink to={"Bisnis"}>
            <Button  onClick={onClose} justifyContent={"left"} w={"100%"}>Bisnis</Button>
              </NavLink>
              <NavLink to={"Ekonomi"}>
            <Button onClick={onClose}justifyContent={"left"} w={"100%"}>Ekonomi</Button>
              </NavLink>
              <NavLink to={"Teknologi"}>
            <Button onClick={onClose}justifyContent={"left"} w={"100%"}>Teknologi</Button>
              </NavLink>
              <NavLink to={"Olahraga"}>
            <Button onClick={onClose}justifyContent={"left"} w={"100%"}>Olahraga</Button>
              </NavLink>
              <NavLink to={"Kuliner"}>
            <Button onClick={onClose}justifyContent={"left"} w={"100%"}>Kuliner</Button>
              </NavLink>
              <NavLink to={"Internasional"}>
            <Button onClick={onClose}justifyContent={"left"} w={"100%"}>Internasional</Button>
              </NavLink>
              <NavLink to={"Fiksi"}>
            <Button onClick={onClose}justifyContent={"left"} w={"100%"}>Fiksi</Button>
              </NavLink>
            </Stack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}
  
  