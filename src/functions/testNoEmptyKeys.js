export const testNoEmptyKeysInJSON = (JSONObject) => {
  let value = true

  Object.keys(JSONObject).forEach(key => {
    if(JSONObject[key] === "") {
      value = false
    }
  })

  return value
}