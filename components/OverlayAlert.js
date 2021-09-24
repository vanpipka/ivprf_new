import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Icon, Divider, ListItem  } from 'react-native-elements';
import Const from '../constants/Const';
import {getPlaneInfo} from '../components/DB_API';

export default class OverlayAlert extends React.PureComponent {

  constructor(props) {
      super(props);
      const { navigation } = this.props;
      this._setPlaneData = this._setPlaneData.bind(this);

      console.log('OverlayAlert CONSTRUCTOR');

      this.state={
          loading: true,
          key: this.props.data.name
      };

  }

  componentDidMount(){
    this._loadDataAsync();
  }

  _setPlaneData(props){
      console.log("_setPlaneData");
      for (var i = 0; i < props.length; i++) {
        props[i]['description'] = props[i]['type']
      }
      this.setState({loading: false, data: props})
  }

  _loadDataAsync = async () => {
      if (this.state.key == "INDEX_ARRAY") {
        getPlaneInfo(this._setPlaneData)
      }else{
        this.setState({loading: false, data: Const[this.props.data.name]})
      }
  }

  _onPress = (props) => {
    if (props != undefined) {
      props["field_id"] = this.props.data.name;
    }else{
      props = {}
    }
    this.props.onPress(props)
  }

  render() {

    if (this.state.loading == true) {
        return(
          <View style={styles.container}>
            <View style={{width: "100%", alignItems: "flex-end"}}>
              <TouchableOpacity onPress={()=>{this._onPress()}}>
                  <Icon
                    name='close'
                    color='#ccd8e6' />
              </TouchableOpacity>
            </View>
            <View style={{ }}>
              <ActivityIndicator  size="large" color="red" />
            </View>

          </View>
        )
    }


    const DATA = this.state["data"]
    let item = null;
    if (this.props.data.type == 0) {

      if (typeof DATA === 'string'){
          item = <Text style={{color: '#688bb0'}}>{DATA}</Text>
      } else {
          item = <Text style={{color: '#688bb0'}}>Примечание по данному полю не указано</Text>
      }

      return (
        <View style={styles.container}>
          <View style={{width: "100%", alignItems: "flex-end"}}>
            <TouchableOpacity onPress={()=>{this._onPress()}}>
                <Icon
                  name='close'
                  color='#ccd8e6' />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {item}
          </View>
        </View>
      );
    } else {

      if (typeof DATA === 'object'){

      //  DATA.map((item, i) => (
      //            console.log(item)
      //          ))

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
          <View style={{width: "100%", alignItems: "flex-end"}}>
            <TouchableOpacity onPress={()=>{this._onPress()}}>
                <Icon
                  name='close'
                  color='#ccd8e6' />
            </TouchableOpacity>
          </View>
          {item}
        </View>
      )
    }

  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
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
