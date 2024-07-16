import { create} from 'zustand'
import { CryptoPrice, Pair } from './types'
import { criptocurrency } from './types'
import { devtools} from 'zustand/middleware'
import {getCryptos, fetchCurremtCryptoPrice} from './services/CryptoService'

type CrypoStore = {
    cryptocurrencies : criptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>

}

export const useCryptoStore = create<CrypoStore>()(devtools((set) => ({

    cryptocurrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    loading: false,

    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(()=> ({
            cryptocurrencies
        }))
    },


    fetchData: async (pair) => {
        set(()=> ({
            loading: true
        }))

        const result = await fetchCurremtCryptoPrice(pair)
        console.log(result)
        set(()=> ({
            result,
            loading: false
        }))

    }
})))


