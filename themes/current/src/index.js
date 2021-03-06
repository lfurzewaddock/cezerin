export {default as SharedContainer} from './containers/shared'
export {default as IndexContainer} from './containers/index'
export {default as CategoryContainer} from './containers/category'
export {default as ProductContainer} from './containers/product'
export {default as NotFoundContainer} from './containers/notfound'
export {default as PageContainer} from './containers/page'
export {default as CheckoutContainer} from './containers/checkout'
export {default as CheckoutSuccessContainer} from './containers/checkoutSuccess'
export {default as SearchContainer} from './containers/search'
export {default as config} from './lib/config'

// combine all css files into one with webpack. Hack to deal with server side rendering.
if(typeof window !== 'undefined'){
  require('bulma/css/bulma.css');
  require('rc-slider/assets/index.css');
  require('react-image-gallery/styles/css/image-gallery-no-icon.css');
  require('../assets/css/theme.css');
}
