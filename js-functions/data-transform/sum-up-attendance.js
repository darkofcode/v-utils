import { toTitle } from "../string/to-title";
import { get } from "../object/get";
import { setNestPath } from "../object/set-nest-path";
import { findIndexOfCollection as indexCol } from "../collection/find-index";
import { transposeDataArray } from "./transpose-data-array";

/**
 *
 * @param {{data:any[],users:any[],dataUniqKey:string,userUniqKey:string,sumUpKeys:string[]}} param0
 * @return {{[string]:{[string]:number}}
 * @example
 const data = [
  {
    present: [],
    absence: [
      {
        id: "74246359244147",
      },
    ],
    late: [],
    approvedAbsence: [],
  },
  {
    present: [
      {
        id: "74297844587892",
      },
    ],
    absence: [],
    late: [],
    approvedAbsence: [],
  },
  {
    present: [
      {
        id: "74297844587892",
      },
    ],
    absence: [],
    late: [],
    approvedAbsence: [],
  },
];

const users = [{ userId: "74246359244147" }, { userId: "74297844587892" }, { userId: "74499732626805" }];
const r = transformData({
  data,
  users,
  dataUniqKey: "id",
  userUniqKey: "userId",
  sumUpKeys: ["present", "absence", "late", "approvedAbsence"],
});
r = {
    "present": {
    "74246359244147": 0,
    "74297844587892": 2,
    "74499732626805": 0
  },
  "absence": {
    "74246359244147": 1,
    "74297844587892": 0,
    "74499732626805": 0
  },
  "late": {
    "74246359244147": 0,
    "74297844587892": 0,
    "74499732626805": 0
  },
  "approvedAbsence": {
    "74246359244147": 0,
    "74297844587892": 0,
    "74499732626805": 0
  }
}
 */
const transformData = ({ data, users, dataUniqKey, userUniqKey, sumUpKeys }) => {
  // sumUpKeys = ["present","absence","late","approvedAbsence"]
  // let headerRow = renameRowKeys.length ? [headerRowName, ...renameRowKeys] : [headerRowName, ...sumUpKeys];
  // headerRow = headerRow.map((k) => toTitle(k));

  let r = {};
  data.forEach((row) => {
    sumUpKeys.forEach((sumUpKey) => {
      users.forEach((user) => {
        const userId = user[userUniqKey];
        const countExisting = get(r, [sumUpKey, userId], 0);
        const findIndexUser = indexCol(dataUniqKey, userId, row[sumUpKey]);
        if (!countExisting) {
          r = setNestPath(r, [sumUpKey, userId], 0);
        }
        if (findIndexUser > -1) {
          r[sumUpKey][userId] = countExisting + 1;
        }
      });
    });
  });
  return r;
};

/**
 * 
 * @param {{ transformData:any, headerName:string, users:any[], userUniqKey:string, userRowNameKey:string }} param0 
 * @example
 const t = toDataArray({transformData,headerName:"att",users,userUniqKey:"userId",userRowNameKey:"userName"});
 =>
    [ 'att',    '001', '002', '003' ],
    [ 'Present', 0,    2,     0 ],
    [ 'Absence', 1,    0,     0 ],
    [ 'Late',    0,    0,     0 ],
    [ 'Approved Absence', 0, 0, 0 ]
 */

const toDataArray = ({ transformData, headerName, users, userUniqKey, userRowNameKey }) => {
  let r = [];
  const usersObj = getUserObject(users, userUniqKey, userRowNameKey);
  // to keep user keys in order
  const usersKeys = Object.keys(usersObj);

  // get header
  let header = [headerName];
  usersKeys.forEach((k) => {
    header.push(usersObj[k]);
  });

  r.push(header);
  // set row data
  Object.keys(transformData).forEach((k) => {
    let row = [];
    row.push(toTitle(k));
    const v = transformData[k];
    usersKeys.forEach((id) => {
      row.push(v[id]);
    });
    r.push(row);
  });
  return r;
};

/**
 1234:"vi chetch",
 3414:"jack ma"
 */
const getUserObject = (users, userUniqKey, userRowNameKey) => {
  let r = {};
  users.forEach((user) => {
    r[user[userUniqKey]] = toTitle(user[userRowNameKey]);
  });
  return r;
};

// const data = [
//   {
//     present: [],
//     absence: [
//       {
//         id: "74246359244147",
//       },
//     ],
//     late: [],
//     approvedAbsence: [],
//   },
//   {
//     present: [
//       {
//         id: "74297844587892",
//       },
//     ],
//     absence: [],
//     late: [],
//     approvedAbsence: [],
//   },
//   {
//     present: [
//       {
//         id: "74297844587892",
//       },
//     ],
//     absence: [],
//     late: [],
//     approvedAbsence: [],
//   },
// ];

// const users = [
//   { userId: "74246359244147", name: "001" },
//   { userId: "74297844587892", name: "002" },
//   { userId: "74499732626805", name: "003" },
// ];

// // const r = transformData(data, users, "id", "user", ["present", "absence", "late", "approvedAbsence"]);
// const r = transformData({
//   data,
//   users,
//   dataUniqKey: "id",
//   userUniqKey: "userId",
//   sumUpKeys: ["present", "absence", "late", "approvedAbsence"],
// });
// const dataArray = toDataArray({
//   transformData: r,
//   headerName: "att",
//   users,
//   userUniqKey: "userId",
//   userRowNameKey: "name",
// });

/*
absence: []
approved_absence: []
created_at: "2020-11-23T00:43:20.071Z"
id: "92549524604207"
late: []
present: (3) [{…}, {…}, {…}]
updated_at: "2020-11-21T17:44:23.530Z"
updated_by_id: "91897189653875"
updated_by_name: "Vi Chet"

*/

/**
 * 
 * @param {{data:any[],users:any[],dataUniqKey:string,userUniqKey:string,sumUpKeys:string[],dateKey:string,userRowName:string,dateHeader:string,headerName:string}} param0
 * @return {{[string]:{[string]:number}}
 * @example
const allData = getAllDataArray({
  data: rawData,
  users: users,
  userUniqKey: "userId",
  userRowName: "name",
  dataUniqKey: "id",
  sumUpKeys: ["present", "absence", "late", "approvedAbsence"],
  dateKey: "createdAt",
  dateHeader:"Date",
  headerName:"Attendance"
});
// =>
[
  ['Date'                     ,'Attendance','001(91897189653875)','002(91903913188725)','003(91902990966132)'],
  [ '2020-11-23T17:32:47.707Z', 'Present', 1, 0, 0 ],
  [ '2020-11-23T17:32:47.707Z', 'Absence', 0, 0, 0 ],
  [ '2020-11-23T17:32:47.707Z', 'Late', 0, 0, 0 ],
  [ '2020-11-23T17:32:47.707Z', 'Approved Absence', 0, 1, 1 ],
  [ '2020-11-24T17:42:58.259Z', 'Present', 1, 0, 1 ],
  [ '2020-11-24T17:42:58.259Z', 'Absence', 0, 0, 0 ],
  [ '2020-11-24T17:42:58.259Z', 'Late', 0, 0, 0 ],
  [ '2020-11-24T17:42:58.259Z', 'Approved Absence', 0, 1, 0 ],
  [ '2020-11-23T00:43:20.071Z', 'Present', 1, 1, 1 ],
  [ '2020-11-23T00:43:20.071Z', 'Absence', 0, 0, 0 ],
]

 */
const getAllDataArray = ({
  data,
  users,
  userUniqKey,
  userRowName,
  dataUniqKey,
  sumUpKeys,
  dateKey,
  dateHeader = "Date",
  headerName = "Attendance",
}) => {
  const userObj = getUserObject(users, userUniqKey, userRowName);
  const userArr = Object.keys(userObj);
  let r = [];
  data.forEach((dataRow) => {
    sumUpKeys.forEach((att) => {
      const attUsers = getUserObject(dataRow[att], dataUniqKey, dataUniqKey);
      let row = [dataRow[dateKey], toTitle(att)];

      userArr.forEach((user) => {
        row.push(!!attUsers[user] ? 1 : 0);
      });
      r.push(row);
    });
  });
  const userHeaders = userArr.map((o) => `${userObj[o]}(${o})`);
  let headers = [dateHeader, headerName, ...userHeaders];
  return [headers, ...r];
};
export { transformData, toDataArray, transposeDataArray, getAllDataArray };

// const rawData = [
//   {
//     id: "92504280253741",
//     createdAt: "2020-11-23T17:32:47.707Z",
//     updatedAt: "2020-11-21T17:32:53.170Z",
//     present: [
//       {
//         id: "91897189653875",
//       },
//     ],
//     absence: [],
//     late: [],
//     approvedAbsence: [
//       {
//         id: "91903913188725",
//       },
//       {
//         id: "91902990966132",
//       },
//     ],
//     updatedById: "91897189653875",
//     updatedByName: "Vi Chet",
//   },
//   {
//     id: "92544147309870",
//     createdAt: "2020-11-24T17:42:58.259Z",
//     updatedAt: "2020-11-21T17:43:01.515Z",
//     present: [
//       {
//         id: "91897189653875",
//       },
//       {
//         id: "91902990966132",
//       },
//     ],
//     absence: [],
//     late: [],
//     approvedAbsence: [
//       {
//         id: "91903913188725",
//       },
//     ],
//     updatedById: "91897189653875",
//     updatedByName: "Vi Chet",
//   },
//   {
//     id: "92549524604207",
//     createdAt: "2020-11-23T00:43:20.071Z",
//     updatedAt: "2020-11-21T17:44:23.530Z",
//     present: [
//       {
//         id: "91897189653875",
//       },
//       {
//         id: "91903913188725",
//       },
//       {
//         id: "91902990966132",
//       },
//     ],
//     absence: [],
//     late: [],
//     approvedAbsence: [],
//     updatedById: "91897189653875",
//     updatedByName: "Vi Chet",
//   },
// ];
// const users = [
//   { userId: "91897189653875", name: "001" },
//   { userId: "91903913188725", name: "002" },
//   { userId: "91902990966132", name: "003" },
// ];

// // {data,users,userUniqKey,userRowName, dataUniqKey, sumUpKeys,dateKey}
// const allData = getAllDataArray({
//   data: rawData,
//   users: users,
//   userUniqKey: "userId",
//   userRowName: "name",
//   dataUniqKey: "id",
//   sumUpKeys: ["present", "absence", "late", "approvedAbsence"],
//   dateKey: "createdAt",
//   dateHeader:"Date",
//   headerName:"Attendance"
// });
