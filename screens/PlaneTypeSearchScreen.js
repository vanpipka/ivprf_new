import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator,TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { Icon } from 'react-native-elements';
import Const from '../constants/Const';

class MyListItem extends React.PureComponent {

  _onPress = () => {
    this.props.onPressItem(this.props);
  };

  render() {
    return (

        <TouchableOpacity onPress={this._onPress} style={{margin:8, alignItems: 'center'}}>
          <View style={{ borderBottomWidth:1, borderBottomColor: '#ccd8e6', height: 40, alignItems: 'center', justifyContent: 'flex-start',  flexDirection: 'row'}}>
              <Text style={{fontWeight: "bold", color: "#4d7198"}}>{this.props.data.icao_code} </Text>
              <Text style={{ width: '90%', color: "#688bb0" }}>
                {this.props.data.name}
              </Text>
          </View>
        </TouchableOpacity>

    );
  }
}

export default class PlaneTypeSearch extends React.Component {

  static navigationOptions = {
    title: 'Тип ВС',
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {types: Const["AIRCRAFT_TYPE_ARRAY"], query: ""};

  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (props) => {

    //console.log(this.props)
    this.props.route.params.onGoBack(props);
    this.props.navigation.goBack();

  };

  _renderItem = ({item}) => (
      <MyListItem
        id = {item.id}
        onPressItem={this._onPressItem}
        data = {item}
      />
    );

  findType(query) {
    const { types } = this.state;

    if (query === '') {
      return types.slice(20);
    }

    const regex = new RegExp(`${query.trim()}`, 'i');
    return types.filter(type => type.name.search(regex) >= 0 || type.icao_code.search(regex) >= 0);
  }

  render() {

    const { navigation } = this.props;

    const { query } = this.state;
    const citys = this.findType(query);

    return (
          <View style={styles.container}>
            <View style={{padding: 4, backgroundColor: "#688bb0"}}>
              <TextInput
                style={styles.inputView}
                value = {this.state.opr}
                onChangeText={(query) => this.setState({query})}
                placeholder = 'Тип воздушного судна'>
              </TextInput>
              <View style={styles.alert}>
                  <Icon
                    name='search'
                    color='#ccd8e6' />
              </View>
            </View>
            <FlatList
              data={citys}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#688bb0',
    width: '98%',
    margin: 4,
    borderRadius: 8,
    height: 50,
  },
  inputView: {
    backgroundColor:"#e9eef5",
    borderRadius:8,
    borderWidth: 1,
    borderColor: "#ccd8e6",
    width: '100%',
    zIndex: 0,
    height: 50,
    paddingLeft: 8,
    color: "#4d7198",
    fontWeight: "bold",
    justifyContent: 'center'

  },
  alert: {
    paddingTop: 3,
    alignItems: "center",
    width: 30,
    height: 30,
    backgroundColor: "#e9eef5",
    position: "absolute",
    right:10,
    top: 13
  },
});
