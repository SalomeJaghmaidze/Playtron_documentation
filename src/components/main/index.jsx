import React from 'react'
import Header from './header'
import IntegrationProcess from '../main/1.integrationprocess'
import Walletintegration from './2.walletintegration'
import PlayerInfo from './2.walletintegration/2.1 playerinfo/Playerinfo'
import Bet from './2.walletintegration/2.2 bet/Bet'
import Win from './2.walletintegration/2.3 win/Win'
import Cancel from './2.walletintegration/2.4 cancel/Cancel'
import Leaderboard from './3.leaderboard/Leaderboard'
import Depositfreespins from './4.depositoffreespins/Depositfreespins'

function Main() {
  return (
    <>
    <Header></Header>
    <IntegrationProcess></IntegrationProcess>
    <Walletintegration></Walletintegration>
    <PlayerInfo></PlayerInfo>
    <Bet></Bet>
    <Win></Win>
    <Cancel></Cancel>
    <Leaderboard></Leaderboard>
    <Depositfreespins></Depositfreespins>
    </>
  )
}

export default Main