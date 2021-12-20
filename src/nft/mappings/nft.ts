/* eslint-disable prefer-const */
import { log, BigInt, BigDecimal, store, Address } from '@graphprotocol/graph-ts'
import {
 NFTContract
} from '../../../generated/schema'
import { NFT, Mint, NameChange, Transfer, ResetStain, SetStain, EmitRand} from '../../../generated/NFT/NFT'

let ZERO_BI = BigInt.fromI32(0);
let ONE_BI = BigInt.fromI32(1);

function getNFTAddress(address: Address): NFT {return NFT.bind(address)
}



export function handleNameChange(event: NameChange): void {

  let NFTC = getNFTAddress(event.address)

  let timestamp = event.block.timestamp.toI32()

  let name = new NFTContract(event.params.tokenId.toString())
  name.date = BigInt.fromI32(timestamp)

  name.tokenId = BigInt.fromI32(event.params.tokenId.toI32())
  name.owner = NFTC.ownerOf(name.tokenId)
  name.metadata = NFTC.metadata(name.tokenId)
  name.number = NFTC.randomNumberID(name.tokenId)
  name.save()

}



export function handleResetStain(event: ResetStain): void {

  let NFTC = getNFTAddress(event.address)

  let timestamp = event.block.timestamp.toI32()

  let name = new NFTContract(event.params.tokenId.toString())

  name.date = BigInt.fromI32(timestamp)
  name.tokenId = BigInt.fromI32(event.params.tokenId.toI32())
  name.metadata = NFTC.metadata(name.tokenId)
  name.owner = NFTC.ownerOf(name.tokenId)
  name.number = NFTC.randomNumberID(name.tokenId)

  name.save()
}


export function handleSetStain(event: SetStain): void {

  let NFTC = getNFTAddress(event.address)

  let timestamp = event.block.timestamp.toI32()

  let name = new NFTContract(event.params.tokenId.toString())

  name.date = BigInt.fromI32(timestamp)
  name.tokenId = BigInt.fromI32(event.params.tokenId.toI32())
  name.metadata = NFTC.metadata(name.tokenId)
  name.owner = NFTC.ownerOf(name.tokenId)
  name.number = NFTC.randomNumberID(name.tokenId)

  name.save()

}


export function handleTransfer(event: Transfer): void {

  let NFTC = getNFTAddress(event.address)

  let timestamp = event.block.timestamp.toI32()
  let name = new NFTContract(event.params.tokenId.toString())

  name.date = BigInt.fromI32(timestamp)
  name.tokenId = BigInt.fromI32(event.params.tokenId.toI32())
  name.metadata = NFTC.metadata(name.tokenId)
  name.owner = NFTC.ownerOf(name.tokenId)
  name.number = NFTC.randomNumberID(name.tokenId)
  name.save()

}



export function handleEmitRand(event: EmitRand): void {

  let NFTC = getNFTAddress(event.address)

  let totalSupply = NFTC.totalSupply().toString()

  let timestamp = event.block.timestamp.toI32()

log.info('Message to be displayed: {},  ,', [totalSupply])

   for (var i = 1; i < parseInt(totalSupply)+1; i++) {
      let TOI = BigInt.fromI32(i);

      log.info('Message to be displayed tokenID: {},  ,', [ i.toString()])
      let name = new NFTContract(TOI.toString())

      name.date = BigInt.fromI32(timestamp)
      name.tokenId = TOI
      name.metadata = NFTC.metadata(name.tokenId)
      name.owner = NFTC.ownerOf(name.tokenId)
      name.metadata = NFTC.metadata(name.tokenId)
      name.save()
    } 
}


