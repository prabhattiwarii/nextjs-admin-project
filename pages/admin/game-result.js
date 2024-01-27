import React from 'react'
import AdminLayout from '@/components/layout/AdminLayout'
import Frontend from '@/constants/Frontend'
import Head from 'next/head'

const gameResult = () => {
  return (
    <React.Fragment>
        <Head>
            <meta charset="utf-8"/>
            <title>{`Game-Result - ${Frontend.APP_NAME}`}</title>
        </Head>
        <AdminLayout page="game-result">
            gameResult
        </AdminLayout>
    </React.Fragment>
  )
}

export default gameResult