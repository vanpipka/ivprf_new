
import React from 'react';
import { Platform, Alert, ScrollView, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, KeyboardAvoidingView, FlatList, RefreshControl } from 'react-native';

export default class FplItem extends React.PureComponent {

  constructor(props) {
      super(props);
      this.state={data: this.props.data,
                refresh: false};
  }

  _onPress = () => {
    this.props.onPressItem(this.props);
  };

  _onPressLike = () => {

    //console.log(this.state.data.id);

    /*let database  = firebase.firestore();
    let newData = this.state.data;

    if (newData.liked) {
      database.collection("userInfo").doc(this.state.user.id).collection("likes").doc(this.state.data.id).delete().then(() => {
          database.collection("news").doc(this.state.data.id).collection("likes").doc(this.state.user.id).delete().then(() => {
                newData.liked = !newData.liked;
                this.setState({data: newData, refresh: !this.state.refresh});
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }else{
      database.collection("userInfo").doc(this.state.user.id).collection("likes").doc(this.state.data.id).set({date: ConvertDateToString(new Date())}).then(() => {
          database.collection("news").doc(this.state.data.id).collection("likes").doc(this.state.user.id).set({date: ConvertDateToString(new Date())}).then(() => {
              newData.liked = !newData.liked;
              this.setState({data: newData, refresh: !this.state.refresh});
          }).catch((error) => {
              console.error("Error removing document: ", error);
          });
        })
        .catch((error) => {
            Alert.alert("Ошибка", "Непредвиденная ошибка");
        });
    }*/


  };

  render() {

    let data = this.state.data

        return(
            <TouchableOpacity onPress={this._onPress}>
              <View style={{padding: 8, margin: 4, marginBottom: 0, backgroundColor: 'white', borderRadius: 5, borderColor: "#e1e3e6", borderWidth: 1}}>
                <View style={{height: 40,  flexDirection: 'row'}}>
                    <View style={{alignItems: 'flex-start', width: '15%'}}>
                      <Text style={{fontWeight: 'bold', color: "grey"}}>FPL</Text>
                    </View>
                    <View style={{alignItems: 'center', width: '50%'}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{fontWeight: 'bold', color: "#4d7198"}}>{data.plane.type} </Text>
                          <Text style={{fontWeight: 'bold', color: "#688bb0"}}>{data.plane.number}</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'flex-end', width: '35%'}}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{ width: 10, height: 10, borderRadius: 50, backgroundColor: data.status.color, marginTop: 5}}>
                        </View>
                        <Text  style={{fontWeight: 'bold', color: data.status.color}}> {data.status.text}</Text>
                      </View>
                    </View>
                </View>
                <View style={{}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{borderRadius: 5, borderColor: "#e1e3e6", backgroundColor: "#fcfcfc", borderWidth:1, width: '40%', padding: 8, alignItems: 'center'}}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>{data.pol.aerodrome}</Text>
                      <Text style={{color: 'grey', fontSize: 12, height: 30}}>{data.pol.name}</Text>
                      <View style={{borderTopWidth:1, width: '100%', borderColor: "#e1e3e6", alignItems: 'center'}}>
                        <Text style={{color: 'grey', fontSize: 12}}>{data.pol.date}</Text>
                      </View>
                    </View>

                    <View style={{alignItems: 'center', width: '20%', paddingTop: 10}}>
                      <View style={{borderBottomWidth:1, borderColor: "grey"}}>
                        <Text style={{color: 'grey', fontSize: 11, alignItems: 'center'}}>{data.plane.time}</Text>
                        <Text style={{position: "absolute", right: -1, bottom: -9, color: "grey"}}>></Text>
                      </View>

                    </View>

                    <View style={{borderRadius: 5, borderColor: "#e1e3e6", backgroundColor: "#fcfcfc", borderWidth:1, width: '40%', padding: 8, alignItems: 'center'}}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>{data.pod.aerodrome}</Text>
                      <Text style={{color: 'grey', fontSize: 12, height: 30}}>{data.pod.name}</Text>
                      <View style={{borderTopWidth:1, width: '100%', borderColor: "#e1e3e6", alignItems: 'center'}}>
                        <Text style={{color: 'grey', fontSize: 12}}>{data.pod.date}</Text>
                      </View>
                    </View>

                  </View>
                </View>

                {data.plane.route ?
                  <View>
                    <Text style={{marginTop: 8, color: 'grey', fontSize: 11}}>
                      {data.plane.route}
                    </Text>
                  </View> : null
                }

              </View>
            </TouchableOpacity>
        )
  }
}
