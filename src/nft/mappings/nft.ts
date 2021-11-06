/* eslint-disable prefer-const */
import { BigInt, BigDecimal, store, Address } from '@graphprotocol/graph-ts'
import {
 NFTContract
} from '../../../generated/schema'
import { NFT, Mint } from '../../../generated/NFT/NFT'


export function handleMint(event: Mint): void {

  let NFTID =  event.transaction.hash.toHex() + '-' + event.logIndex.toString()

  let NFTC = getNFTAddress(event.address)

  let mint = new NFTContract(NFTID)
  mint.tokenId = BigInt.fromI32(event.params._redemptionCount.toI32())
  mint.value =  BigInt.fromI32(event.params.value.toI32())
  mint.owner = NFTC.ownerOf(mint.value)
  mint.metadata = NFTC.metadata(mint.value)
  mint.save()
}

function getNFTAddress(address: Address): NFT {return NFT.bind(address)
}
