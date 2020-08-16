### 递归
#### 四步法
- terminator
- process current logic
- drill down
- reverse the current level status if needed

#### java模版
```java
Public void recur (int level, int param) {
	// terminator
	if (level > MAX_LEVEL) {
		// process result
		return;
	}
	
	// process current logic
	process(level, param);
	
	// drill down
	recur(level: level + 1, newParam);

	// restore current status
}
```

#### 思维要点：
- 不要人肉进行递归（最大误区）
- 找到最近最简方法，将其拆解成可重复解决的问题（重复子问题）
- 数学归纳法思维

### [236] 二叉树的最近公共祖先(lowestCommonAncestor)

#### 递归解题思路
- 定义子问题：左右子树分别包含p、q
- 一个节点也可以是它自己的祖先，故可能此节点是p、q
- 满足条件:(lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))

### [77] 组合(combine)

#### 递归回溯解题思路
- 先选择一个数字作为临时组合
- 然后再进入递归和上一个组合进行组合，直到终止条件则为子集
- 进入递归下一个数字组合前，要重置当前组合状态