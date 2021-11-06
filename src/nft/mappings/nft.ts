/* eslint-disable prefer-const */
import { BigInt, BigDecimal, store, Address } from '@graphprotocol/graph-ts'
import {
 NFTContract
} from '../../../generated/schema'
import { NFT, Mint, NameChange, Transfer, BioChange} from '../../../generated/NFT/NFT'

let ZERO_BI = BigInt.fromI32(0);
let ONE_BI = BigInt.fromI32(1);

export function handleMint(event: Mint): void {

  let NFTID =  event.transaction.hash.toHex() + '-' + event.logIndex.toString()

  let NFTC = getNFTAddress(event.address)

  let value =  BigInt.fromI32(event.params.value.toI32())
  let redemptionCount = BigInt.fromI32(event.params._redemptionCount.toI32())

  let mint = new NFTContract(NFTID)
  mint.tokenId = redemptionCount
  mint.owner = NFTC.ownerOf(redemptionCount)
  mint.metadata = NFTC.metadata(redemptionCount)
  mint.save()

}

function getNFTAddress(address: Address): NFT {return NFT.bind(address)
}


export function handleNameChange(event: NameChange): void {

  let NFTID =  event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  let NFTC = getNFTAddress(event.address)

  let name = new NFTContract(NFTID)
  name.tokenId = BigInt.fromI32(event.params.tokenId.toI32())
  name.owner = NFTC.ownerOf(name.tokenId)
  name.metadata = NFTC.metadata(name.tokenId)
  name.save()
}


export function handleBioChange(event: BioChange): void {

  let NFTID =  event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  let NFTC = getNFTAddress(event.address)

  let name = new NFTContract(NFTID)
  name.tokenId = BigInt.fromI32(event.params.tokenId.toI32())
  name.owner = NFTC.ownerOf(name.tokenId)
  name.metadata = NFTC.metadata(name.tokenId)
  name.save()
}


export function handleTransfer(event: Transfer): void {

  let NFTID =  event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  let NFTC = getNFTAddress(event.address)

  let name = new NFTContract(NFTID)
  name.tokenId = BigInt.fromI32(event.params.tokenId.toI32())
  name.owner = NFTC.ownerOf(name.tokenId)
  name.metadata = NFTC.metadata(name.tokenId)
  name.save()
}


