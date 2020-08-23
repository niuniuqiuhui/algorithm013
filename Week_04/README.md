## 深度优先搜索（depth first search）

## 广度优先搜索（breadth first search）

## 贪心算法(Greedy)
### 贪心算法是什么？
- 贪心算法是一种在每一步选择中都采取当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。

## 二分查找

### 二分查找的前提
- 单调性（单调递增或者单调递减）
- 存在上下界（bounded）
- 能够索引访问（index accessible）

### 代码模版
```JavaScript
  funciton binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
      let mid = (right - left) / 2 + left;
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
```

## 例题

### [200] 岛屿数量(numIslands)
#### 解题思路(深度优先)
- 首先循环二维网格
- 我们找到为1的位置，从此位置开始进行深度搜索，把找到为1的位置都重新标记为0
- 岛屿的数量就是我们进行深度优先搜索的次数

### [860] 柠檬水找零(lemonadeChange)

#### 解题思路(贪心算法)
- 如果顾客给了5美元，five++
- 如果顾客给了10美元，我们需要找回5美元，如果five小于1，则直接return false；否则five--
- 如果顾客给了20美元，则我们需要找回15美元；两种找回方式，1找回10美元+5美元，则five--，ten--；2找回3个5美元，则five-3；否则return false；
- 最后 return ture