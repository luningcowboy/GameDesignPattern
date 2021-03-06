# 命令模式

## 笔记
定义:将一个请求封装成一个对象，使发出请求的责任和执行请求的责任分开，这样两者之间通过命令对象进行沟通，这样方便将
对象进行存储，传递，调用，增加与管理。

优点:
1. 降低系统的耦合度，命令模式能将调用操作的队形与实现该操作的对象解耦。
2. 增加和删除命令非常方便，采用命令模式增加和删除命令不会影响其他类，它满足开闭原则，对扩展比较灵活。
3. 可以实现宏命令，命令模式可以与组合模式结合，将多个命令装配成一个组合命令，即宏命令。
4. 方便实现Undo和Redo操作，命令模式可以与备忘录模式结合，实现命令的撤销与恢复。
缺点:
可能产生大量具体命令类，因为每一个具体的操作都需要设计一个具体命令类，这将增加系统的复杂性。

主要角色:
1. 抽象命令类: 命令基类，声明通用的接口
2. 具体命令类: 实现具体的命令内容
3. 
