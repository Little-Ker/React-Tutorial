// Mock 資料建立
import Mock from 'mockjs'

let data = Mock.mock('/api/mockTestList', {
  "dataList" : [
    {"id": 1, "name": "A", "price": 100},
    {"id": 2, "name": "B", "price": 200},
    {"id": 3, "name": "C", "price": 300},
  ],
  'list|1-5': [{
    'id|+1': 1
  }],
  'boolean|1': true, // 二分之一機率是 true 或 false
  'string1|1-5': '★',

})

export default data