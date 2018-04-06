// 存放一些公共的JS方法
// sessionStorage
export const setSS = (key, val) => {
  if (typeof value === 'object') val = JSON.stringify(val)
  sessionStorage.setItem(key, val)
}

export const getSS = key => {
  // 如果是object类型 返回 JSON.parse 的结果
  let val = sessionStorage.getItem(key) || ''
  if (val.startsWith('{') || val.startsWith('[')) {
    val = JSON.parse(val)
  }
  return val
}
// localStorage
export const setLS = (key, val) => {
  if (typeof value === 'object') val = JSON.stringify(val)
  localStorage.setItem(key, val)
}

export const getLS = key => {
  // 如果是object类型 返回 JSON.parse 的结果
  let val = localStorage.getItem(key) || ''
  if (val.startsWith('{') || val.startsWith('[')) {
    val = JSON.parse(val)
  }
  return val
}