import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayAlerts from './displayAlerts';
import {connect} from 'react-redux';
import {Button, Alert} from 'reactstrap'
require('bootstrap/dist/css/bootstrap.css');
var moment = require('moment');


class CounterPage extends Component {
  constructor(props){
    super(props)
    this.state= {
      crush:false,
      alert:false,
      like:false,
      reset:false,
      commentaire:'',
      username: ''
      }
  }

  crushClick(){

    if (this.state.crush == false) {
      this.props.crushClick()
      this.props.totalClickIncrease()
    }else {
      this.props.decreaseCrushClick()
      this.props.totalClickDecrease()
    }

    this.setState({
    crush: !this.state.crush,
    })
  }

  alertClick(){
    this.props.totalClickIncrease()
    this.props.alertClick()

    this.setState({
    alert: true
  })
  }

  likeClick(){

    if (this.state.like == false) {
      this.props.likeClick()
      this.props.totalClickIncrease()
    }else {
      this.props.decreaseLikeClick()
      this.props.totalClickDecrease()
    }

    this.setState({
    like: !this.state.like,
    })
  }

  resetClick(){
    this.props.resetClick()
    this.setState({
      reset: !this.state.reset,
      crush:false,
      alert:false,
      like:false
    })
  }

  sendAComment(){
    var nowBid = moment().format('MMMM Do YYYY, h:mm:ss a');

    var infoComment = {commentaire : this.state.commentaire,
      username : this.state.username, date:nowBid
    }

    this.props.sendAComment(infoComment)
    this.setState({
      commentaire:'',
      username: '',
    })
  }

  render() {

    var historiqueCrush;
    var displayHistoriqueCrush
    var displayHistoriqueLike
    var displayHistoriqueAlert

    var crush;
    if (this.state.crush == true) {
      crush = {
        color: 'white'
      }
      var historiqueCrush ='Vous avez cliqué sur crush'
    }

    var alert;
    var historiqueAlert;
    if (this.state.alert == true) {
      alert = {
        color: 'white'
      }
      var historiqueAlert ='Vous avez cliqué sur alert'
    }

    if (this.state.alert == false) {
      displayHistoriqueAlert={
        display:'none'
      }
    }

    if (this.state.crush == false) {
      displayHistoriqueCrush={
        display:'none'
      }
    }

    var like;
    var historiqueLike;
    if (this.state.like == true ) {
      like = {
        color: 'white'
      }
      var historiqueLike ='Vous avez cliqué sur like'
    }

    if (this.state.like == false) {
      displayHistoriqueLike={
        display:'none'
      }
    }
    var listComment=[];
    for (var i = 0; i < this.props.commentListCopy.length; i++) {
      listComment.push(<div style={{margin:10, flexDirection:'column'}}><span style={{fontSize:13}}>{this.props.commentListCopy[i].date}</span><h5>{this.props.commentListCopy[i].username}</h5><span style={{fontSize:16}}>{this.props.commentListCopy[i].commentaire}</span> <div style={{border: "0.5px solid #D8D8D8", width: '90%', margin:'auto', opacity:'0.6', marginTop:'50px', marginBottom:'40px'}}></div></div>)
      console.log('tableau');
      }

      const isInvalid =
        this.state.commentaire === '' ||
        this.state.username === '';

return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} className="background">
          <img style={{width:'30vh'}} src={logo}/>
           <div class="col-xs-8">
           <h1 style={{textAlign:'center', margin:60}}>Flowers</h1>
           <div>
             <DisplayAlerts/>
           </div>
           <img class="img-responsive" src="./images/flowers.jpg"/>
           <div>
               <span style={crush} onClick={this.crushClick.bind(this)} class="glyphicon glyphicon-thumbs-up"></span>
               <span  style={like} onClick={this.likeClick.bind(this)} class="glyphicon glyphicon-heart"></span>
               <span  style={alert} onClick={this.alertClick.bind(this)} class="glyphicon glyphicon glyphicon-alert"></span>
           </div>
           <Button style={{marginTop:20, marginBottom:20}}onClick={this.resetClick.bind(this)} color='danger'>Reset</Button>
           <div style={{display:'flex', flexDirection:'column'}}>
              <div>
               <span>{historiqueCrush}</span><span style={displayHistoriqueCrush}> {this.props.crush} fois</span>
              </div>
             <div>
               <span>{historiqueAlert}</span><span style={displayHistoriqueAlert}> {this.props.alert} fois</span>
             </div>
             <div>
               <span>{historiqueLike}</span><span style={displayHistoriqueLike}> {this.props.like} fois</span>
             </div>
             <div>
               <span>Total de click: </span><span>{this.props.total}</span>
             </div>
            </div>
          </div>
          <div className="form-group" style={{display:'flex', alignItems:'center', justifyContent:'center', margin: 'auto', width:'50%', flexDirection:'column', marginBottom:100, marginTop:80 }}>
            <div style={{height:'200px', overflow:'scroll', border: "1px solid #D8D8D8", borderRadius: '5px', padding:'5px', width: '90%', margin:'auto'}}>
              <div>
              {listComment}
              </div>
            </div>
            <label htmlFor="message-text" className="col-form-label" style={{margin:'20px', textTransform:'none'}}>Nom d'utilisateur</label>
            <textarea type="text" value={this.state.username} onChange={(ev)=>this.setState({username:ev.target.value})} className="form-control" id="message-text">
            </textarea>
            <label htmlFor="message-text" className="col-form-label" style={{margin:'20px', textTransform:'none'}}>Rédiger un commentaire</label>
            <textarea type="text" value={this.state.commentaire} onChange={(ev)=>this.setState({commentaire:ev.target.value})} className="form-control" id="message-text">
            </textarea>
            <Button color="primary" disabled={isInvalid} style={{margin: 20 }} onClick={this.sendAComment.bind(this)}> Envoyer</Button>
            </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    crushClick: function() {

        dispatch( {type: 'increaseCrush'} )
    },
    decreaseCrushClick: function() {

        dispatch( {type: 'decreaseCrush'} )
    },
    alertClick: function() {

        dispatch( {type: 'increaseAlert'} )
    },
    decreaseAlertClick: function() {

        dispatch( {type: 'decreaseAlert'} )
    },
    likeClick: function() {

        dispatch( {type: 'increaseLike'} )
    },
    decreaseLikeClick: function() {

        dispatch( {type: 'decreaseLike'} )
    },
    totalClickIncrease: function() {

        dispatch( {type: 'increaseTotal'} )
    },
    totalClickDecrease: function() {

        dispatch( {type: 'decreaseTotal'} )
    },
    resetClick: function() {

        dispatch( {type: 'reset'} )
    },
    sendAComment: function(infoComment) {

        dispatch( {type: 'comment', infoComment:infoComment} )
    }
    }
  }

  function mapStateToProps(props) {
    return { like: props.like, crush: props.crush, alert: props.alert, total: props.total, commentListCopy:props.comment}
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterPage);
