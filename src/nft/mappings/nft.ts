/* eslint-disable prefer-const */
import { BigInt, BigDecimal, store, Address } from '@graphprotocol/graph-ts'
import {
 NFTContract,
 METADATA
} from '../../../generated/schema'
import { NFT, Mint, NameChange, Transfer, ResetStain, EmitRand} from '../../../generated/NFT/NFT'

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

  name.Stain = NFTC.getStain(name.tokenId)
  name.named = NFTC.getnamed(name.tokenId)
  name.mef = NFTC.getmef(name.tokenId)

  name.save()

  let md = new METADATA(event.params.tokenId.toString())
  md.number = NFTC.randomNumberID(name.tokenId)
  md.save()

}



export function handleResetStain(event: ResetStain): void {

  let NFTC = getNFTAddress(event.address)

  let timestamp = event.block.timestamp.toI32()

  let name = new NFTContract(event.params.tokenId.toString())

  name.date = BigInt.fromI32(timestamp)
  name.tokenId = BigInt.fromI32(event.params.tokenId.toI32())
  name.metadata = NFTC.metadata(name.tokenId)
  name.owner = NFTC.ownerOf(name.tokenId)

  name.Stain = NFTC.getStain(name.tokenId)
  name.named = NFTC.getnamed(name.tokenId)
  name.mef = NFTC.getmef(name.tokenId)


  name.save()

  let md = new METADATA(event.params.tokenId.toString())
  md.number = NFTC.randomNumberID(name.tokenId)
  md.save()
}

export function handleTransfer(event: Transfer): void {

  let NFTC = getNFTAddress(event.address)

  let timestamp = event.block.timestamp.toI32()
  let name = new NFTContract(event.params.tokenId.toString())

  name.date = BigInt.fromI32(timestamp)
  name.tokenId = BigInt.fromI32(event.params.tokenId.toI32())
  name.metadata = NFTC.metadata(name.tokenId)
  name.owner = NFTC.ownerOf(name.tokenId)

  name.Stain = NFTC.getStain(name.tokenId)
  name.named = NFTC.getnamed(name.tokenId)
  name.mef = NFTC.getmef(name.tokenId)

  name.save()

  let md = new METADATA(event.params.tokenId.toString())
  md.number = NFTC.randomNumberID(name.tokenId)
  md.save()
}


