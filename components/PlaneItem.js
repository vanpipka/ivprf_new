
import React from 'react';
import { Platform, Alert, ScrollView, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, KeyboardAvoidingView, FlatList, RefreshControl } from 'react-native';

export default class PlaneItem extends React.PureComponent {

  constructor(props) {
      super(props);
      this.state={data: this.props.data,
                refresh: false,
                fullMode: false};
  }

  _onPress = () => {
    this.setState({fullMode: true})
  };

  _openPlane = () => {
      this.props.onPressItem(this.state.data);
  };

  render() {

    let data = this.state.data

    return(
            <View>
              <View style={{padding: 8, margin: 4, marginBottom: 0, backgroundColor: 'white', borderRadius: 5, borderColor: "#e1e3e6", borderWidth: 1}}>
                <TouchableOpacity onPress={this._openPlane} >
                  <View style={{flexDirection: 'row', paddingBottom: 8}}>
                      <View style={{alignItems: 'flex-start', width: '50%'}}>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={{fontWeight: 'bold', color: "#4d7198"}}>{data.meta.type} </Text>
                            <Text style={{fontWeight: 'bold', color: "#688bb0"}}>{data.meta.reg_number}</Text>
                          </View>
                      </View>
                      <View style={{alignItems: 'flex-end', width: '50%'}}>
                        <View style={{height: 22, borderWidth: 1, padding: 4, paddingTop: 1, borderRadius: 5, backgroundColor: data.colour_and_markings, borderColor: "#e1e3e6"}}>
                            <Text style={{color: "grey", fontSize: 12}}>{data.colour_and_markings != "" ? data.colour_and_markings : "цвет не указан" } </Text>
                        </View>
                      </View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{alignItems: 'flex-start'}}>
                      <Text style={{fontSize: 12, color: "grey"}}>Эксплуатант:</Text>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                      <Text style={{fontWeight: 'bold', color: "grey"}}>{data.meta.organization}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{alignItems: 'flex-start', width: '50%'}}>
                      <Text style={{fontSize: 12, color: "grey"}}>Категория турбулентности:</Text>
                    </View>
                    <View style={{alignItems: 'flex-end', width: '50%'}}>
                      <Text style={{fontWeight: 'bold', color: "grey"}}>{data.wake_turbulence_cat}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{alignItems: 'flex-start', width: '50%'}}>
                      <Text style={{fontSize: 12, color: "grey"}}>Правила полета:</Text>
                    </View>
                    <View style={{alignItems: 'flex-end', width: '50%'}}>
                      <Text style={{fontWeight: 'bold', color: "grey"}}>{data.flight_rules}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{alignItems: 'flex-start', width: '50%'}}>
                      <Text style={{fontSize: 12, color: "grey"}}>Крейсерская скорость:</Text>
                    </View>
                    <View style={{alignItems: 'flex-end', width: '50%'}}>
                      <Text style={{fontWeight: 'bold', color: "grey"}}>{data.cruising_speed.value} {data.cruising_speed.unit}</Text>
                    </View>
                  </View>
                {this.state.fullMode ?
                  <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={{alignItems: 'flex-start', width: '50%'}}>
                        <Text style={{fontSize: 12, color: "grey"}}>Крейсерская высота:</Text>
                      </View>
                      <View style={{alignItems: 'flex-end', width: '50%'}}>
                        <Text style={{fontWeight: 'bold', color: "grey"}}>{data.cruising_level.value} {data.cruising_level.unit}</Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={{alignItems: 'flex-start'}}>
                        <Text style={{fontSize: 12, color: "grey"}}>СЛГ до:</Text>
                      </View>
                      <View style={{alignItems: 'flex-end'}}>
                        <Text style={{fontWeight: 'bold', color: "grey"}}>{data.certificate_end_date}</Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={{alignItems: 'flex-start'}}>
                        <Text style={{fontSize: 12, color: "grey"}}>Страховка до:</Text>
                      </View>
                      <View style={{alignItems: 'flex-end'}}>
                        <Text style={{fontWeight: 'bold', color: "grey"}}>{data.insurance_end_date}</Text>
                      </View>
                    </View>
                  </View> :
                  <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={this._onPress} >
                    <Text style={{color: '#688bb0', textDecorationLine: 'underline', fontSize: 12}}>Подробнее...</Text>
                  </TouchableOpacity>
                }
                </TouchableOpacity>
              </View>
            </View>
      )
  }
}
