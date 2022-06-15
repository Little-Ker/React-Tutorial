import create from "zustand"
import axios from 'axios'

const axi = (api) => new Promise((resolve, reject) => {
    axios.get(api)
        .then((response) => {
            resolve(response.data.dataList)
        }).catch((error) => {
            reject(error)
        })
})

const useStore = create((set) => ({
    count: 1,
    // 同步改資料
    add: () => set((state) => ({ count: state.count + 1 })),
    //  非同步改資料
    list: [],
    fetch: async (api) => {
        const response = await axi(api)
        set({ list: response })
    },
}))

export default useStore