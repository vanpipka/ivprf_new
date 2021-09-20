import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon, Divider, ListItem  } from 'react-native-elements';
import Const from '../constants/Const';

export default class OverlayAlert extends React.PureComponent {

  _onPress = (props) => {
      props["field_id"] = this.props.data.name;      
      this.props.onPress(props)
  }

  render() {

    const DATA = Const[this.props.data.name]
    let item = null;
    if (this.props.data.type == 0) {

      if (typeof DATA === 'string'){
          item = <Text style={{color: '#688bb0'}}>{DATA}</Text>
      } else {
          item = <Text style={{color: '#688bb0'}}>Примечание по данному полю не указано</Text>
      }

      return (
        <View style={styles.container}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {item}
          </View>
        </View>
      );
    } else {

      DATA.map((item, i) => (
                console.log(item)
              ))

      if (typeof DATA === 'object'){
          item = DATA.map((item, i) => (
                    <ListItem key={item.id} bottomDivider onPress={() => {this._onPress(item)}}>
                      <View style={{width: "100%"}}>
                        <Text style={{width: "100%", fontWeight: "bold", color: "#688bb0"}}>{item.name}</Text>
                        {item.description ? <Text style={{color: "#688bb0"}}>{item.description}</Text> : null}
                      </View>
                    </ListItem>
                  ))
      } else {
          item = <Text style={{color: '#688bb0'}}>Неизвестная ошибка</Text>
      }

      return (
        <View style={styles.container}>
          {item}
        </View>
      )
    }

  }
}

const styles = StyleSheet.create({
  container: {
    width: "80%"
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
