import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (

        <UserProvider>
            <Navbar />
            <hr />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='/*' element={<Navigate to="/about" />} />
            </Routes>
        </UserProvider>
    )
}
