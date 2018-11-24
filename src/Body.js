import React, { Component } from 'react';
import { View, Text, Container, Content } from 'native-base';

import styles from './styles';
import Button from './Button';

export default class Body extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Drawer Configuration
            </Text>
            <Button
              onPress={this.props.openDrawer}
              text="Abrir Drawer"
            />
          </View>
        </Content>
      </Container>
    );
  }
}