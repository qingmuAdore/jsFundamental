/********************************************************
WeakMap

WeakMap结构与Map结构类似，也是用于生成键值对的集合。
区别:
- WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
- WeakMap的键名所指向的对象，不计入垃圾回收机制。

WeakMap 的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。
因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。
也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。


WeakMap API差别:
- 没有遍历操作（即没有key()、values()和entries()方法），也没有size属性
- 二是无法清空，即不支持clear方法。
因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。
********************************************************/

const wm = new WeakMap();
let key = {};
let obj = { foo: 1 };

wm.set(key, obj);
console.log(wm.get(key));


// key = null; 垃圾回收

//WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
obj = null;
console.log(wm.get(key));