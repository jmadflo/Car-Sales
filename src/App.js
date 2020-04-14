import React from 'react';
import { connect } from 'react-redux'

import { removeFeatureAction, addFeatureAction } from './actionCreators/mainActions'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeatureAction(item)
  }

  const buyItem = item => {
    // dispatch an action here to add an item
    props.addFeatureAction(item)
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  })
}

export default connect(mapStateToProps, {removeFeatureAction, addFeatureAction})(App)
