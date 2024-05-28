import FooterRegisterLogin from 'components/Footer/FooterRegisterLogin'
import HeaderForgetPassword from 'components/Header/HeaderForgetPassword'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const ForgetPasswordLayout = () => {
  useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
  return (
    <>
        <HeaderForgetPassword/>
        <Outlet/>
        <FooterRegisterLogin/>
    </>
  )
}

export default ForgetPasswordLayout