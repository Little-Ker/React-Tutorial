import Mock from 'mockjs'

const dataAry = Mock.mock({
  'data|40': [{
    'id|+1': 1,
    'content': '@title',
    'operate|1': ['true', 'false'],
  }],
})

// 將大資料處理成分頁資料
const data = Mock.mock('/api/mockAjax', 'post', (options) => {
  const offset = getParams(options.body, 'pageIndex')
  const limit = getParams(options.body, 'dataLimit')
  const pageNum = (offset / limit) + 1
  const start = (pageNum - 1) * limit
  const end = pageNum * limit
  const totalPage = Math.ceil(dataAry.data.length / limit)
  const list = (pageNum > totalPage) ? [] : dataAry.data.slice(start, end)

  return {
    data: list,
    recordsTotal: dataAry.data.length,
  }
})

const getParams = (url, name) => {
    const newArr = url.replace(/{/g, '').replace(/}/g, '').replace(/"/g, '').replace(/'/g, '').split(',')
    for (let i = 0; i < newArr.length; i++) {
      const itemArr = newArr[i].split(':')
      if (itemArr[0] === name) return Number(itemArr[1])
    }
    return null
}

export default data