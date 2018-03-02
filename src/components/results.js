import React, { Component } from 'react';

class Results extends Component {
    constructor( props ) {
        super(props);
        this.store = this.props.store;
    }

    votesAngularInPercent(){
        if( this.store.getState().angular){
            return( this.store.getState().angular/
        (this.store.getState().angular+this.store.getState().react+this.store.getState().vuejs)) * 100
        } else {
            return 0;
        }
    }

    votesReactInPercent(){
        if( this.store.getState().react){
            return( this.store.getState().angular/
        (this.store.getState().angular+this.store.getState().react+this.store.getState().vuejs)) * 100
        } else {
            return 0;
        }
    }

    votesVueInPercent(){
        if( this.store.getState().vuejs){
            return( this.store.getState().angular/
        (this.store.getState().angular+this.store.getState().react+this.store.getState().vuejs)) * 100
        } else {
            return 0;
        }
    }

     votesAngularStyle() {
         return{
             width: this.votesAngularInPercent() +'%'
         }
     }
     votesReactStyle() {
         return{
             width: this.votesReactInPercent() +'%'
         }
     }
     votesVueStyle() {
         return{
             width: this.votesVueInPercent() +'%'
         }
     }

    render( ) {
        return(
            <div>
                <span className='label label-danger'> Angular: {this.votesAngularInPercent().toFixed(2)+'%'}></span>
                <div className='progress progress-striped active'>
                    <div className="progress-bar bg-danger" style={this.votesAngularStyle()}></div>
                </div>
                <span className='label label-info'> React: {this.votesReactInPercent().toFixed(2)+'%'}></span>
                <div className='progress progress-striped active'>
                    <div className="progress-bar bg-info" style={this.votesReactStyle()}></div>
                </div>
                <span className='label label-success'> VueJs: {this.votesVueInPercent().toFixed(2)+'%'}></span>
                <div className='progress progress-striped active'>
                    <div className="progress-bar bg-success" style={this.votesVueStyle()}></div>
                </div>
            </div>
        )
    }
}

export default Results;
