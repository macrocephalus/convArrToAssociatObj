function convArrToAssociatObj(arr, keyField)
{
const obj = {};
 for (let arrItem of arr)
 {
    const key= arrItem[keyField];
    const objValField = {...arrItem};
    if(!obj[key])
    {
        let tempArr = [];
        tempArr.push(objValField)
        obj[key] = tempArr;
    } else {
        obj[key].push(objValField);
    }
 }
  return obj;
}
