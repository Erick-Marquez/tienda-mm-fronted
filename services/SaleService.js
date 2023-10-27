import BaseUrl from './api/BaseUrl'

export const SaleService = {

    async getSales(body){
        return await BaseUrl.get("api/sales", { params: body })
    },

    async create(body){
        return await BaseUrl.post("api/sales", body)
    },
    
    async convertInvoice(body){
        return await BaseUrl.post("api/sales/convert-invoice", body)
    },
}