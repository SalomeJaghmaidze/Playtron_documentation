import React from 'react'
import Header from './header'
import IntegrationProcess from '../main/1.integrationprocess'
import Walletintegration from './2.walletintegration'
import PlayerInfo from './2.walletintegration/2.1 playerinfo/Playerinfo'
import Bet from './2.walletintegration/2.2 bet/Bet'

function Main() {
  return (
    <>
    <Header></Header>
    <IntegrationProcess></IntegrationProcess>
    <Walletintegration></Walletintegration>
    <PlayerInfo></PlayerInfo>
    <Bet></Bet>
    </>
  )
}

export default Main