import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

export default class ErrorPage extends React.PureComponent {

  _onPress = () => {
    this.props.onClose();
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../assets/img/nothing.png')} style={styles.image}/>
          <Text style={{color: '#ED0011'}}>{this.props.errorText}</Text>
          <View style = {styles.redSection}>
            <TouchableOpacity
              onPress={this._onPress}>
              <Text style = {{color: 'white', fontWeight: 'bold'}}>Закрыть</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
  },
  redSection: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D21C43',
    width: '100%',
    height: 40,
  },
});
