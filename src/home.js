import React, { Component } from 'react';
import { Drawer, View, Text } from 'native-base';

//import Drawer from 'react-native-drawer';
import Body from './Body';
import Side from './side';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: 'displace',
      openDrawerOffset:120,
      closedDrawerOffset:0,
      panOpenMask: .1,
      panCloseMask: .9,
      relativeDrag: false,
      panThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: false,
      side: "top",
    };
  }

  setDrawerType(type){
    this.setState({
      drawerType: type
    })
  }

  tweenHandler(ratio){
    if(!this.state.tweenHandlerPreset){ return {} }
    return tweens[this.state.tweenHandlerPreset](ratio)
  }

  noopChange(){
    this.setState({
      changeVal: Math.random()
    })
  }

  openDrawer = () => {
    this.drawer._root.open()
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  render() {
    let side = <Side closeDrawer={() => {
      this.drawer._root.close()
    }} />
    return (
      <Drawer
        ref={ref => this.drawer = ref }
        type={this.state.drawerType}
        openDrawerOffset={this.state.openDrawerOffset}
        closedDrawerOffset={this.state.closedDrawerOffset}
        panOpenMask={this.state.panOpenMask} //Abrir drawer ao puxar na lateral da tela
        panCloseMask={this.state.panCloseMask} //Fechar drawer ao clica dentro da área do drawer
        relativeDrag={this.state.relativeDrag}
        panThreshold={this.state.panThreshold}
        content={side}
        styles={drawerStyles}
        disabled={this.state.disabled}
        tweenDuration={this.state.tweenDuration}
        tweenEasing={this.state.tweenEasing}
        side={this.state.side}>

        <Body
          drawerType={this.state.drawerType}
          setParentState={this.setStateFrag.bind(this)}
          openDrawer={this.openDrawer}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
        />
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

/* const drawerStyles = {
  drawer: { shadowColor: '#000000', backgroundColor: 'pink', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
} */