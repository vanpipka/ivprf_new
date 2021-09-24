import * as SQLite from "expo-sqlite";

function openDatabase() {
  console.log('OpenDatabase');
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("ivprf.db");
  return db;
}

export function getPlaneInfo(_callback) {
  console.log('getPlaneInfo');
  db = openDatabase();
  db.transaction(
      (tx) => {
          tx.executeSql("select * from plane",
              null,
              (txObj, { rows: { _array } }) => _callback(_array), //успех
              (txObj, error) => console.log('Error ', error) //ошибка
          )
      },
      null,
      console.log("request was executed")//успех
  );
};

export function setPlaneInfo(data) {
  console.log('refreshPlaneInfo');

  db = openDatabase();
  let text = ""
  for (var i = 0; i < data.length; i++) {
    let el = data[i];

    db.transaction(
        (tx) => {
            tx.executeSql("insert or replace into plane (id, type, name, deleted) values ("+el["id"]+",'"+el["meta"]["type"]+"','"+el["meta"]["reg_number"]+"', 0);",
              null,
              (txObj, { rows: { _array } }) => console.log(_array), //успех
              (txObj, error) => console.log('Error ', error) //ошибка
            )
          }
        )
    };
}

export function createTables() {
  console.log('createTables');
  db = openDatabase();
  createTablePlanes(db);
}

function createTablePlanes(db) {
  console.log('createTablePlanes');
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists plane (id integer primary key not null, type text, name text, deleted boolean);",
        null,
        console.log("table plane created"),
        (txObj, error) => console.log('Error ', error)
    );
  });
}
