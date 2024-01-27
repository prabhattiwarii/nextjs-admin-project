import React from 'react'
import AdminLayout from '@/components/layout/AdminLayout'
import Frontend from '@/constants/Frontend'
import Head from 'next/head'

const userRequest = () => {
  return (
    <React.Fragment>
        <Head>
            <meta charset="utf-8"/>
            <title>{`User-Request - ${Frontend.APP_NAME}`}</title>
        </Head>
        <AdminLayout page="user-requests">
            userRequest
        </AdminLayout>
    </React.Fragment>
  )
}

export default userRequest