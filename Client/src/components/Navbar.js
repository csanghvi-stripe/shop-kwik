import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends Component{
  render(){
    return(
      <div class="navbar-fixed">
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">ECommerce-Stripe</Link>

                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        <li>({this.props.addedItems.length})</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps, {  })(Navbar)
