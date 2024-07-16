import {z} from 'zod'
import { CryptoCurrencysResponseSchema, CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from '../schema/crypto-schema'


export type Currency = z.infer<typeof CurrencySchema>
export type criptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Cryptocurrenys = z.infer<typeof CryptoCurrencysResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>

