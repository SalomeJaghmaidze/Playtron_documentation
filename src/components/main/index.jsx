import React from 'react'
import Header from './header'
import IntegrationProcess from '../main/1.integrationprocess'
import Walletintegration from './2.walletintegration'
import PlayerInfo from './2.walletintegration/2.1 playerinfo'

function Main() {
  return (
    <>
    <Header></Header>
    <IntegrationProcess></IntegrationProcess>
    <Walletintegration></Walletintegration>
    <PlayerInfo></PlayerInfo>
    </>
  )
}

export default Main