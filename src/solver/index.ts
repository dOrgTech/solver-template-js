import {BatchAuctionModel, ExecuteOrder, SettledBatchAuctionModel} from "./types";
import simpleOrderOutput from '../../data/simple-order-solution.json'

export function solve(batch: BatchAuctionModel): SettledBatchAuctionModel {
    const ref_token = Object.keys(batch.tokens).find(address => {
        return batch.tokens[address].normalize_priority == 1
    })

    const executedOrders: Record<string, ExecuteOrder> = Object.keys(batch.orders).reduce((orders, order) => {
        const currentOrder = batch.orders[order]
        orders[order] = {
            exec_sell_amount: currentOrder.sell_amount,
            exec_buy_amount: currentOrder.buy_amount,
        }
        return orders
    }, {})

    return {
        ref_token,
        orders: executedOrders,
        prices: {},
        amms: {}
    }
}