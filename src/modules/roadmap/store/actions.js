import * as productService from '../services/product';


export default {
  setClothes(slug) {
    productService.getRopa()
    .then(result=>{this.clothes=result.data})
    .catch(error=>{throw error})
  },
  setClothesDetail(slug) {
    productService.getRopaDetail(slug)
    .then(result=>{this.clothesDetail=result.data})
    .catch(error=>{throw error})
  },
}