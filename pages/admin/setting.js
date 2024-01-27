import React from 'react'
import AdminLayout from '@/components/layout/AdminLayout'
import Frontend from '@/constants/Frontend'
import Head from 'next/head'

const setting = () => {
  return (
    <React.Fragment>
        <Head>
            <meta charset="utf-8"/>
            <title>{`Setting - ${Frontend.APP_NAME}`}</title>
        </Head>
        <AdminLayout page="setting">
            setting
        </AdminLayout>
    </React.Fragment>
  )
}

export default setting