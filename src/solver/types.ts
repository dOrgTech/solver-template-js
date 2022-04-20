interface Token {
    decimals?: number;
    alias?: string;
    external_price?: number;
    normalize_priority?: number
    internal_buffer?: string
}

interface Order {
    sell_token: string,
    buy_token: string,
    sell_amount: string,
    buy_amount: string,
    allow_partial_fill: boolean,
    is_sell_order: boolean,
    fee: Fee,
    cost: Cost,
    is_liquidity_order: boolean,
}

interface Fee {
    amount: string
    token: string
}

interface Cost {
    amount: string
    token: string
}

interface Amm {
    kind: string
    reserves: Record<string, string | { balance: string, weight: string }>
    fee: string
    cost: Cost
    mandatory: boolean
}

type AmmParameters = "ConstantProduct" | "WeightedProduct" | "Stable"

interface Metadata {
    environment?: string
}

interface ExecuteOrder {
    exec_sell_amount: string
    exec_buy_amount: string
}

interface ExecutedAmm {
    sell_token: string
    buy_token: string
    exec_sell_amount: string
    exec_buy_amount: string
    exec_plan?: {
        sequence: number
        position: number
    }
}

interface UpdatedAmm {
    execution: ExecutedAmm[]
}

interface InteractionData {
    target: string
    value: string
    call_data: Uint8Array
}

export type Tokens = Record<string, Token>

export interface BatchAuctionModel {
    tokens: Record<string, Token>
    orders:  Record<string, Order>
    amms: Record<string, Amm>
    metadata?: Metadata
    instance_name?: string
    time_limit?: string
    max_nr_exec_orders?: number
    auction_id?: number
}

export interface SettledBatchAuctionModel {
    orders: Record<number, ExecuteOrder>
    amms: Record<number, UpdatedAmm>
    ref_token?: string
    prices: Record<string, string>
    interaction_data?: InteractionData[]
}
