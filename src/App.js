import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { connect } from 'react-redux'

import { removeFeatureAction, addFeatureAction } from './actionCreators/mainActions'
import Header from './components/Header'
import AddedFeatures from './components/AddedFeatures'
import AdditionalFeatures from './components/AdditionalFeatures'
import Total from './components/Total'

const App = props => {
  const dispatch = useDispatch()
  const car = useSelector(state => state.car)
  const additionalFeatures = useSelector(state=> state.additionalFeatures)
  const additionalPrice = useSelector(state => state.additionalPrice)

  const removeFeature = item => {
    // dispatch an action here to remove an item
    dispatch(removeFeatureAction(item))
  }

  const buyItem = item => {
    // dispatch an action here to add an item
    dispatch(addFeatureAction(item))
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} buyItem={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  )
}
export default App
// const mapStateToProps = state => {
//   return ({
//     car: state.car,
//     additionalFeatures: state.additionalFeatures,
//     additionalPrice: state.additionalPrice
//   })
// }

// export default connect(mapStateToProps, {removeFeatureAction, addFeatureAction})(App)
