import React, { Component } from 'react';
import {connect} from 'react-redux';


class DisplayAlerts extends Component {
  render() {
    return (
           <div>
             <p>
             <span>{this.props.crush} Crush </span> &bull;
               <span> {this.props.like} Like </span> &bull;
               <span>  {this.props.alert} Alert </span> &bull;
               <span> Total: {this.props.total}</span>
              </p>
          </div>
    );
  }
}

function mapStateToProps(props) {
  return { like: props.like, crush: props.crush, alert: props.alert, total: props.total  }
}

export default connect(
    mapStateToProps,
    null
)(DisplayAlerts);
