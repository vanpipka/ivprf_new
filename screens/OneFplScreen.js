import React from 'react';
import { Platform, ScrollView, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, KeyboardAvoidingView, FlatList, RefreshControl, Alert} from 'react-native';
import { Overlay, ButtonGroup, Icon} from 'react-native-elements';
import ErrorPage from '../components/ErrorPage';
import OverlayAlert from '../components/OverlayAlert'
import PlaneItem from '../components/PlaneItem';
import Const from '../constants/Const';
import DateTimePicker from '@react-native-community/datetimepicker';
import {getPlaneInfo} from '../components/DB_API';

function PostHeaders(props) {

  let headers = {};
  headers["Content-Length"]    = props.contentLength;
  headers["Accept"]            = "application/json";
  headers["Accept-Language"]   = "ru-RU,ru;q=0.9,de-RU;q=0.8,de;q=0.7,en-US;q=0.6,en;q=0.5";
  headers["Connection"]        = "keep-alive";
  headers["Content-Type"]      = "application/json";

  return headers;

}

async function getPlaneInfoAsync(props) {


  const AUTH_TOKEN = await AsyncStorage.getItem("auth_token");
  const SIGNUP_URL = Const["SERVER_URL"] + "/api/users/fpl/?id="+props["id"];
  console.log(SIGNUP_URL);
  let result = "";

  let response  = await fetch(SIGNUP_URL, {method: 'POST', headers: {"authorization": AUTH_TOKEN, "Content-Type": "application/json"}});
  result = await response.text();
  let data      = JSON.parse(result)
  return data

}

async function makeRequestAsync(id, props) {

  return;

  console.log("/api/users/fpl/");

  const URL = Const["SERVER_URL"] + "/api/plane/?id=" + id;
  //const URL = "https://vseexpo.ru/worker/m/search/";
  console.log(URL);

  const AUTH_TOKEN = await AsyncStorage.getItem("auth_token");

  const headers = {"Content-Type": "application/json",
                  "authorization": AUTH_TOKEN};

  let response  = await fetch(URL, {method: 'PUT', body: JSON.stringify(props), headers: headers});
  let data      = JSON.parse(await response.text())

  if (data['result'] == true){
    Alert.alert("Успех", "Данные успешно сохранены");
  }else{
    Alert.alert("Ошибка", data["error"]);
  }
}

function getType(type){

  const AIRCRAFT_TYPE_ARRAY = Const["AIRCRAFT_TYPE_ARRAY"];
  let data = {};

  const regex = new RegExp(`${type.trim()}`, 'i');
  let arr = AIRCRAFT_TYPE_ARRAY.filter(type => type.icao_code.search(regex) >= 0);

  if (arr.length > 0) {
    data = arr[0]
  }
  return data
}

function getTurbulence(data){

  const WAKETURBULENCE_ARRAY = Const["WAKETURBULENCE_ARRAY"];
  let turbulense = {};
  for (var i = 0; i < WAKETURBULENCE_ARRAY.length; i++) {
    if (WAKETURBULENCE_ARRAY[i]["code"] === data){
        turbulense = WAKETURBULENCE_ARRAY[i];
        break;
    };
  }

  return turbulense

}

function getFlyRules(data){

  const FLY_RULES = Const["FLYRULES_ARRAY"];
  let fly_rules = {};
  for (var i = 0; i < FLY_RULES.length; i++) {
    if (FLY_RULES[i]["code"] === data){
        fly_rules = FLY_RULES[i];
        break;
    };
  }
  return fly_rules

}

function getFlyType(data){

  const FLYTYPES = Const["FLYTYPES_ARRAY"];
  let fly_type = {};
  for (var i = 0; i < FLYTYPES.length; i++) {
    if (FLYTYPES[i]["code"] === data){
        fly_type = FLYTYPES[i];
        break;
    };
  }
  return fly_type

}

function getSpeedUnit(data){

  const UNIT_SPEED = Const["UNIT_SPEED"];
  let unit = "";
  for (var i = 0; i < UNIT_SPEED.length; i++) {
    if (UNIT_SPEED[i]["code"] === data){
        unit = UNIT_SPEED[i];
        break;
    };
  }


  return unit

}

function getHeightUnit(data){

  const UNIT_HEIGTH = Const["UNIT_HEIGTH"];
  let unit = "";
  for (var i = 0; i < UNIT_HEIGTH.length; i++) {
    if (UNIT_HEIGTH[i]["code"] === data){
        unit = UNIT_HEIGTH[i];
        break;
    };
  }

  return unit

}

function makePlaneInfo(data){

    let plane = {};
    plane["index"]             = data["plane"]["number"]
    //plane["reg_number"]     = data["meta"]["reg_number"]
    //plane["opr"]            = data["meta"]["organization"]
    plane["cruising_speed"] = data["speed"]["value"]
    plane["cruising_speed_unit"]  = getSpeedUnit(data["speed"]["unit"])
    plane["cruising_level_unit"]  = getHeightUnit(data["level"]["unit"])
    plane["cruising_level"] = data["level"]["value"]
    //plane["color"]          = data["colour_and_markings"]
    plane["fly_rules"]      = getFlyRules(data["plane"]["flight_rules"])
    plane["fly_type"]      = getFlyType(data["plane"]["type_of_flight"])
    plane["count"]      = data["plane"]["count"].toString()
    plane["wake_turbulence_cat"] = getTurbulence(data["plane"]["wtc"])
    //plane["certificate_end_date"] = data["certificate_end_date"]
    //plane["insurance_end_date"] = data["insurance_end_date"]
    plane["type"]               = getType(data["plane"]["plane_type"])
    plane["equipment"]               = data["equipment"]
    plane["pol_a"]               = {"name": data["pol"]["aerodrome"], "description": data["pol"]["name"]};
    plane["pol_time"]               = data["pol"]["date"]

    return plane
}

export default class OneFplScreen extends React.PureComponent {

  static navigationOptions = ({navigation, screenProps}) => {

    const params = navigation.state.params || {};

    return {
      title:  params.title,
      headerLeft:  null,
      //headerRight: () => params.headerRight,
      headerStyle: {
        backgroundColor: '#D30068',
      },
    }
  }

  constructor(props) {
      super(props);
      const { navigation } = this.props;

      console.log('ONE PLANE SCREEN CONSTRUCTOR');

      this.state={
          loading: true,
          data: {},
          error: "",
          overlay: false,
          datepicker: {use: false, field: ""},
          overlay_prop: {name: "", type: ""},
          page: 0,
      };

  }

  _setNavigationParams() {
    /*console.log(this.props.navigation);

    this.props.navigation.setParams({title: 'FPL'});*/
  }

  componentDidMount(){
    this._setNavigationParams();
    this._loadDataAsync();
  }

  _loadDataAsync = async () => {

    console.log(this.props.route);

    if (this.props.route["params"] != undefined
      && this.props.route["params"]["id"] != undefined) {

        let data = await getPlaneInfoAsync(this.props.route["params"]);

        if (data["id"] !== undefined){
          let planeInfo = makePlaneInfo(data);
          planeInfo["loading"] = false;
          planeInfo["error"] = "";
          planeInfo["errors"] = {};
          this.setState(planeInfo)
        }else{
          if (data["title"] == "UNAUTHORIZED"){
            this.props.navigation.navigate('LoginScreen', {user: {}});
          }else{
            this.setState({error: data["detail"], loading: false})
          }
        }
    } else {
        let planeInfo = {"loading": false,
                      "error": "",
                      "reg_number": "",
                      "opr": "",
                      "cruising_speed": "",
                      "cruising_speed_unit": getSpeedUnit("kmh"),
                      "cruising_level_unit": getHeightUnit("mamsl"),
                      "cruising_level": "",
                      "color": "",
                      "fly_rules": {},
                      "wake_turbulence_cat": {},
                      "certificate_end_date": "",
                      "insurance_end_date": "",
                      "type": {},
                      "errors": {}
                    };

        this.setState(planeInfo)
    }
  }

  _savePlane = (props) => {
    return;
    let newData = {}
    let failure = false;
    if (this.state.reg_number == "") {
        newData["reg_number"] = true;
        failure = true;
    }

    if (this.state.type["id"] == undefined) {
        newData["type"] = true;
        failure = true;
    }

    if (this.state.wake_turbulence_cat["id"] == undefined) {
        newData["wake_turbulence_cat"] = true;
        failure = true;
    }

    if (failure) {
      Alert.alert("Отказ", "Необходимо заполнить обязательные поля");
      this.setState({errors: newData})
    } else {

      let certificate_end_date = "";
      let insurance_end_date = "";

      if (this.state.certificate_end_date != "") {
          certificate_end_date = new Date(this.state.certificate_end_date).getTime().toString().substring(0, 10)
      };
      if (this.state.insurance_end_date != "") {
          insurance_end_date = new Date(this.state.insurance_end_date).getTime().toString().substring(0, 10)
      };

      let data = {
          colour_and_markings: this.state.color,
          emergency_equipment: {dinghies:{}},
          equipment: {},
          flight_profile: {
            cruising_level: {
              unit: this.state.cruising_level_unit.code  == undefined ? "" : this.state.cruising_level_unit.code,
              value: this.state.cruising_level
            },
            cruising_speed: {
              unit: this.state.cruising_speed_unit.code  == undefined ? "" : this.state.cruising_speed_unit.code,
              value: this.state.cruising_speed
            },
            flight_rules: this.state.fly_rules.code  == undefined ? "" : this.state.fly_rules.code
          },
          opr: this.state.opr,
          reg_number: this.state.reg_number,
          subcategory: "plane",
          wake_turbulence_cat: this.state.wake_turbulence_cat.code == undefined ? "" : this.state.wake_turbulence_cat.code,
          type: this.state.type.icao_code  == undefined ? "" : this.state.type.icao_code,
          name: this.state.type.icao_code + " " + this.state.reg_number,
          insurance_end_date: insurance_end_date,
          certificate_end_date: certificate_end_date
      }

      let result = makeRequestAsync(this.state.id, data)

    }

  }

  _onReturnAlert = (props) => {

    console.log("_onReturnAlert", props);

    let newData = {overlay: false}

    if (props != undefined) {
      if (props["field_id"] != undefined) {
          if (props["field_id"] == "FLYRULES_ARRAY") {
                  newData["fly_rules"] = props
          } else if (props["field_id"] == "WAKETURBULENCE_ARRAY") {
                  newData["wake_turbulence_cat"] = props
                  newData["errors"] = {}
          } else if (props["field_id"] == "PLANE_COLOR") {
                  newData["color"] = props.code
          } else if (props["field_id"] == "INDEX_ARRAY") {
                  const AIRCRAFT_TYPE_ARRAY = Const["AIRCRAFT_TYPE_ARRAY"];
                  let result = AIRCRAFT_TYPE_ARRAY.filter(data => data["icao_code"] == props["type"]);
                  if (result.length > 0) {this._setPlaneType({"id": result[0]["id"], "data": result[0]})}
                  newData["index"] = props.name
          } else if (props["field_id"] == "UNIT_HEIGTH") {
                  newData["cruising_level_unit"] = props
          } else if (props["field_id"] == "UNIT_SPEED") {
                  newData["cruising_speed_unit"] = props
          }
      }
    };
    this.setState(newData)
  }

  _onReturnDate = (props) => {

    let newData = {datepicker: {use: false, field: ""}}
    if (props["type"] == "set") {
        if (this.state.datepicker.field == "certificate_end_date") {
            newData["certificate_end_date"] = (""+props["nativeEvent"]["timestamp"].toISOString()).substring(0, 10)
        } else if (this.state.datepicker.field == "insurance_end_date") {
            newData["insurance_end_date"] = (""+props["nativeEvent"]["timestamp"].toISOString()).substring(0, 10)
        }
    }

    this.setState(newData)

  }

  _onPressAlert = (props) => {
      this.setState({overlay: true, overlay_prop: {name: props.name, type: 0}})
  }

  _onPressSelect = (props) => {
      this.setState({overlay: true, overlay_prop: {name: props.name, type: 1}})
  }

  _onPressDate = (props) => {
      this.setState({datepicker: {use: true, field: props.name}})
  }

  _setPlaneType = (props) => {

    console.log("_setPlaneType", props);
      //console.log(props);
        /*"cruising_level": "6860",
          "cruising_speed": "415",
          "fuel_clock": "312",
          "icao_code": "E110",
          "id": "228",
          "max_weight": "5900",
          "name": "EMB-110/111 Bandeirante,C95,R95,SC95,P95",
          "wake_turbulence_cat": "L",*/

      if (props["id"] != undefined) {

        let newData = {type: props["data"], errors: {}}

        if (props["data"]["cruising_level"] != undefined) {
          newData["cruising_level_unit"]  = getHeightUnit("mamsl")
          newData["cruising_level"] = props["data"]["cruising_level"]
        }
        if (props["data"]["cruising_speed"] != undefined) {
          newData["cruising_speed"] = props["data"]["cruising_speed"]
          newData["cruising_speed_unit"]  = getSpeedUnit("kmh")
        }

        if (props["data"]["wake_turbulence_cat"] != undefined) {
          newData["wake_turbulence_cat"]  = getTurbulence(props["data"]["wake_turbulence_cat"])
        }

        this.setState(newData)
      }
  }

  render() {

      if (this.state.loading == true) {
          return(
            <View style={styles.container}>
                <ActivityIndicator  size="large" color="red" />
            </View>
          )
      }

      else if (this.state.error != "") {
          return(<View style={styles.container}>
            <ErrorPage onClose={this._loadDataAsync} errorText={this.state.error}/>
          </View>)
      }else{
        const buttons = ['Форма', 'Карта', 'История']
        let body = null;
        let datepicker = null;

        if (this.state.datepicker.use) {

          let dateValue = new Date();

          if (this.state[this.state.datepicker.field]) {
            try {
                dateValue = new Date(Date.parse(this.state[this.state.datepicker.field]))
            } catch (e) {
                console.log("cant parse date " + this.state[this.state.datepicker.field]);
            }

          }

          datepicker = <DateTimePicker
                                        testID="dateTimePicker"
                                        field={this.state[this.state.datepicker.field]}
                                        value={dateValue}
                                        is24Hour={true}
                                        display="default"
                                        onChange={this._onReturnDate} />;

        }

        if (this.state.page != 0){
          body = <ScrollView style={{width: "100%", padding:4}}>

            <Text style={{color: 'red'}}>В разработке</Text>
            <View style={{marginTop: 10,zindex: 0}}>

              <Text style={styles.inputArticle}>
                Оборудование
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>                              </Text>
              </View>
              <TouchableOpacity style={styles.inputView}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.alert}>
                  <Icon
                    name='view-list'
                    color='#ccd8e6' />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 10,zindex: 0}}>
              <Text style={styles.inputArticle}>
                PBN/
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>           </Text>
              </View>
              <TouchableOpacity style={styles.inputView}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.alert}>
                  <Icon
                    name='view-list'
                    color='#ccd8e6' />
              </TouchableOpacity>
            </View>

          </ScrollView>
        }else{
          body = <ScrollView style={{width: "100%", padding:4}}>

            <View style={{marginTop: 10,zindex: 0}}>
              <Text style={[styles.inputArticle, this.state.errors.reg_number ? {color: "red"} : {}]}>
                3. Тип сообщения
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>                                    </Text>
              </View>
              <TextInput style={[styles.inputView, this.state.errors.reg_number ? {borderColor: "red"} : {}]} value = {this.state.messagetype} onChangeText={(text) => {this.setState({messagetype: text, errors: {}})}}>
              </TextInput>
            </View>

            <View style={{marginTop: 10,zindex: 0}}>
              <Text style={[styles.inputArticle, this.state.errors.reg_number ? {color: "red"} : {}]}>
                7. Опознавательный индекс ВС
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>                                                               </Text>
              </View>
              <TouchableOpacity style={[styles.inputView, this.state.errors.index ? {borderColor: "red"} : {}]} onPress={()=>this._onPressSelect({name: "INDEX_ARRAY"})}>
                <View style={{flexDirection: "row"}}>
                  <Text style = {{ color: "#4d7198", fontWeight: "bold"}}>
                    {this.state.index}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.alert} onPress={()=>this._onPressAlert({name: "INDEX_ALERT"})}>
                  <Icon
                    name='help-outline'
                    color='#ccd8e6' />
              </TouchableOpacity>

            </View>

            <View style={{marginTop: 4,zindex: 0}}>
                <Text style={styles.inputArticle}>
                  8. Правила полетов
                </Text>
                <View style={styles.inputArticleBorder}>
                  <Text>                                        </Text>
                </View>
                <TouchableOpacity style={styles.inputView} onPress={()=>this._onPressSelect({name: "FLYRULES_ARRAY"})}>
                  <View style={{flexDirection: "row"}}>
                    <Text style = {{ color: "#4d7198", fontWeight: "bold"}}>
                      {this.state.fly_rules.name}
                    </Text>
                    <Text style = {{ color: "#688bb0", fontWeight: "bold", paddingLeft: 8}}>
                      {this.state.fly_rules.description}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alert} onPress={()=>this._onPressAlert({name: "FLY_RULE_ALERT"})}>
                    <Icon
                      name='help-outline'
                      color='#ccd8e6' />
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 4,zindex: 0}}>
                <Text style={styles.inputArticle}>
                  8. Тип полета
                </Text>
                <View style={styles.inputArticleBorder}>
                  <Text>                           </Text>
                </View>
                <TouchableOpacity style={styles.inputView} onPress={()=>this._onPressSelect({name: "FLYTYPES_ARRAY"})}>
                  <View style={{flexDirection: "row"}}>
                    <Text style = {{ color: "#4d7198", fontWeight: "bold"}}>
                      {this.state.fly_type.name}
                    </Text>
                    <Text style = {{ color: "#688bb0", fontWeight: "bold", paddingLeft: 8}}>
                      {this.state.fly_type.description}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alert} onPress={()=>this._onPressAlert({name: "FLY_TYPE_ALERT"})}>
                    <Icon
                      name='help-outline'
                      color='#ccd8e6' />
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 10,zindex: 0}}>
              <Text style={[styles.inputArticle, this.state.errors.reg_number ? {color: "red"} : {}]}>
                9. Количество ВС
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>                                   </Text>
              </View>
              <TextInput keyboardType="numeric" style={[styles.inputView, this.state.errors.index ? {borderColor: "red"} : {}]} value = {this.state.count} onChangeText={(text) => {this.setState({count: text, errors: {}})}}>
              </TextInput>
            </View>

            <View style={{marginTop: 4,zindex: 0}}>
              <Text style={[styles.inputArticle, this.state.errors.type ? {color: "red"} : {}]}>
                9. Тип ВС
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>                   </Text>
              </View>
              <TouchableOpacity style={[styles.inputView, this.state.errors.type ? {borderColor: "red"} : {}]} onPress={()=>this.props.navigation.navigate('PlaneTypeSearch', {onGoBack: this._setPlaneType})}>
                <View style={{flexDirection: "row"}}>
                  <Text style = {{ color: "#4d7198", fontWeight: "bold"}}>
                    {this.state.type.icao_code}
                  </Text>
                  <Text style = {{ color: "#688bb0", fontWeight: "bold", paddingLeft: 8}}>
                    {this.state.type.name}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.alert} onPress={()=>this._onPressAlert({name: "TYPE_ALERT"})}>
                <Icon
                  name='help-outline'
                  color='#ccd8e6' />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 4,zindex: 0}}>
              <Text style={[styles.inputArticle, this.state.errors.wake_turbulence_cat ? {color: "red"} : {}]}>
                9. Категория турбулентности следа
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>                                                                      </Text>
              </View>
              <TouchableOpacity style={[styles.inputView, this.state.errors.wake_turbulence_cat ? {borderColor: "red"} : {}]} onPress={()=>this._onPressSelect({name: "WAKETURBULENCE_ARRAY"})}>
                <View style={{flexDirection: "row"}}>
                  <Text style = {{ color: "#4d7198", fontWeight: "bold"}}>
                    {this.state.wake_turbulence_cat.name}
                  </Text>
                  <Text style = {{ color: "#688bb0", fontWeight: "bold", paddingLeft: 8}}>
                    {this.state.wake_turbulence_cat.description}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.alert} onPress={()=>this._onPressAlert({name: "WAKETURBULENCE_ALERT"})}>
                <Icon
                  name='help-outline'
                  color='#ccd8e6' />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 10,zindex: 0}}>
              <Text style={[styles.inputArticle, this.state.errors.reg_number ? {color: "red"} : {}]}>
                10. Оборудование
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>                                     </Text>
              </View>
              <TextInput style={[styles.inputView, this.state.errors.equipment ? {borderColor: "red"} : {}]} value = {this.state.equipment} onChangeText={(text) => {this.setState({equipment: text, errors: {}})}}>
              </TextInput>
            </View>

            <View style={{marginTop: 10,zindex: 0}}>
              <Text style={[styles.inputArticle, this.state.errors.reg_number ? {color: "red"} : {}]}>
                13. Аэродром вылета
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>                                            </Text>
              </View>
              <TouchableOpacity style={[styles.inputView, this.state.errors.pol_a ? {borderColor: "red"} : {}]} onPress={()=>this._onPressSelect({name: "AERODROMS"})}>
                <View style={{flexDirection: "row"}}>
                  <Text style = {{ color: "#4d7198", fontWeight: "bold"}}>
                    {this.state.pol_a.name}
                  </Text>
                  <Text style = {{ color: "#688bb0", fontWeight: "bold", paddingLeft: 8}}>
                    {this.state.pol_a.description}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.alert} onPress={()=>this._onPressAlert({name: "AERODROMS_ALERT"})}>
                <Icon
                  name='help-outline'
                  color='#ccd8e6' />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 10,zindex: 0}}>
              <Text style={[styles.inputArticle, this.state.errors.pol_time ? {color: "red"} : {}]}>
                13. Время вылета
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>                                     </Text>
              </View>
              <TextInput style={[styles.inputView, this.state.errors.pol_time ? {borderColor: "red"} : {}]} value = {this.state.pol_time} onChangeText={(text) => {this.setState({equipment: text, errors: {}})}}>
              </TextInput>
            </View>


            <View style={{marginTop: 4,zindex: 0}}>
              <Text style={styles.inputArticle}>
                Крейсерская высота
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>                                          </Text>
              </View>
              <TextInput style={styles.inputView} value = {this.state.cruising_level} onChangeText={(text) => {this.setState({cruising_level: text})}}>
              </TextInput>
              <TouchableOpacity style={styles.unit} onPress={()=>this._onPressSelect({name: "UNIT_HEIGTH"})}>
                  <Text style={{fontWeight: "bold", color: "#688bb0"}}>{this.state.cruising_level_unit.name}</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 4,zindex: 0}}>
              <Text style={styles.inputArticle}>
                Крейсерская скорость
              </Text>
              <View style={styles.inputArticleBorder}>
                <Text>                                              </Text>
              </View>
              <TextInput style={styles.inputView} value = {this.state.cruising_speed} onChangeText={(text) => {this.setState({cruising_speed: text})}}>
              </TextInput>
              <TouchableOpacity style={styles.unit} onPress={()=>this._onPressSelect({name: "UNIT_SPEED"})}>
                  <Text style={{fontWeight: "bold", color: "#688bb0"}}>{this.state.cruising_speed_unit.name}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        }

        return (
          <View style={{ flex: 1, backgroundColor: "#f5f5f5"}}>

            <ButtonGroup
              onPress={(index)=>{this.setState({page: index})}}
              selectedIndex={this.state.page}
              buttons={buttons}
              selectedButtonStyle = {{backgroundColor: "#688bb0"}}
              containerStyle={{height: 40, marginLeft: 4, marginRight: 4, borderRadius: 8, }}
            />

            {body}

            <TouchableOpacity style={styles.button} onPress={()=>{this._savePlane()}}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>Сохранить</Text>
            </TouchableOpacity>
            <Overlay fullScreen isVisible={this.state.overlay} overlayStyle={{alignItems: "center"}} onBackdropPress={()=>this.setState({overlay: false})}>
              <ScrollView style={{width: "100%", padding:4}}>
                <OverlayAlert data={this.state.overlay_prop} onPress = {this._onReturnAlert}/>
              </ScrollView>
            </Overlay>

            {datepicker}

          </View>
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArticle: {
    position: "absolute",
    top: -10,
    zIndex: 2,
    color: "#688bb0",
    left: 8,
  },
  unit: {
    paddingTop: 3,
    padding: 8,
    marginTop: -1,
    alignItems: "center",
    height: 32,
    borderRadius: 8,
    borderColor: "#ccd8e6",
    borderWidth: 1,
    backgroundColor: "#e9eef5",
    position: "absolute",
    right:5,
    top: 10
  },
  alert: {
    paddingTop: 3,
    alignItems: "center",
    width: 30,
    height: 30,
    backgroundColor: "#e9eef5",
    position: "absolute",
    right:5,
    top: 9
  },
  inputArticleBorder: {
    backgroundColor: "#f5f5f5",
    position: "absolute",
    left: 7,
    top: -1,
    zIndex: 1,
    height: 2
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
    marginBottom: 8,
    paddingLeft: 8,
    color: "#4d7198",
    fontWeight: "bold",
    justifyContent: 'center'

  },
});

/*


*/
