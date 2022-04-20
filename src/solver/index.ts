import { BatchAuctionModel, SettledBatchAuctionModel } from "./types";
import simpleOrderOutput from '../../data/simple-order-solution.json'

export function solve(orders: BatchAuctionModel): SettledBatchAuctionModel {
    return simpleOrderOutput
}