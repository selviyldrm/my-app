import alertify from 'alertifyjs'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table ,Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as cartActions from "../../redux/actions/cartActions"


class CartDetail extends Component {
   
    render() {
        return (
            <div>
                sepet
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) { //dispatch=aksiyonlar (aksiyonu proplara bağla)
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail) 