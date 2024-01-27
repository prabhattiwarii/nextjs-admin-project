import React from 'react'
import AdminLayout from '@/components/layout/AdminLayout'
import Frontend from '@/constants/Frontend'
import Head from 'next/head'

const game = () => {
  return (
    <React.Fragment>
        <Head>
            <meta charset="utf-8"/>
            <title>{`Game - ${Frontend.APP_NAME}`}</title>
        </Head>
        <AdminLayout page="game">
            game
        </AdminLayout>
    </React.Fragment>
  )
}

export default game