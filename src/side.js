import React, { Component } from 'react';
import { Text, View } from 'native-base';

import styles from './styles';
import Button from './Button';

export default class Side extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          Side
        </Text>
        <Button
          onPress={() => {
            this.props.closeDrawer();
          }}
          text="Fechar Drawer"
        />
      </View>
    );
  }
}