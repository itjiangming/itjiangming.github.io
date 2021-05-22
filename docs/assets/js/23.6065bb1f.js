(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{542:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("code",[t._v("GridLayout")]),t._v(" （网格布局），Android 4.0 后推出的，将其子级放置在"),s("strong",[t._v("矩形网格")]),t._v("中的布局。与 TableLayout（表格布局）有点类似，但是功能更多，相对可用性也更高。")]),t._v(" "),s("blockquote",[s("p",[t._v("主要的特性：")]),t._v(" "),s("ul",[s("li",[t._v("可以设置布局中组件的排列方式。")]),t._v(" "),s("li",[t._v("可以自定义网格布局有多少行，多少列。")]),t._v(" "),s("li",[t._v("可以直接设置组件位于某行某列。")]),t._v(" "),s("li",[t._v("可以设置组件横跨几行或者几列。")])])]),t._v(" "),s("h2",{attrs:{id:"特性介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性介绍"}},[t._v("#")]),t._v(" 特性介绍")]),t._v(" "),s("p",[t._v("网格布局由一组无限细的线组成，这些细线将可视区域划分为多个"),s("em",[t._v("单元")]),t._v("。在整个 API 中，网格线由网格"),s("strong",[t._v("索引")]),t._v("引用。具有"),s("code",[t._v("N")]),t._v("列的网格具有"),s("code",[t._v("N+1")]),t._v("个从 0 到 N（含）的网格索引。无论如何配置 GridLayout，网格索引"),s("code",[t._v("0")]),t._v("都固定在容器的前边缘，而网格索引"),s("code",[t._v("N")]),t._v("则固定在其后边缘（在考虑填充之后）。")]),t._v(" "),s("p",[s("strong",[t._v("行和列规格")])]),t._v(" "),s("p",[t._v("子项占据一个或多个连续的单元，这由它们的"),s("code",[t._v("rowSpec")]),t._v("和 "),s("code",[t._v("columnSpec")]),t._v("布局参数定义。每个规范都定义了要占用的行或列的集合。以及应该如何在生成的单元格组中对齐子元素。尽管单元格通常不会在 GridLayout中 重叠，但是 GridLayout 不会阻止将子级定义为占据相同的单元格或单元格组。但是，在这种情况下，不能保证子代在布局操作完成后不会重叠。")]),t._v(" "),s("p",[s("strong",[t._v("默认单元分配")])]),t._v(" "),s("p",[t._v("如果一个子元素不指定希望占据单元格的行和列索引，GridLayout 使用其"),s("code",[t._v("orientation")]),t._v("、"),s("code",[t._v("rowCount")]),t._v("和"),s("code",[t._v("columnCount")]),t._v("属性自动指定单元格位置。")]),t._v(" "),s("p",[s("strong",[t._v("空间")])]),t._v(" "),s("p",[t._v("子级之间的空间可以通过使用专用空间视图的实例或通过设置"),s("code",[t._v("leftMargin")]),t._v("、"),s("code",[t._v("topMargin")]),t._v("、"),s("code",[t._v("rightMargin")]),t._v("和"),s("code",[t._v("bottomMargin")]),t._v("布局参数来指定。"),s("code",[t._v("useDefaultMargins")]),t._v(" 设置该属性后，将根据平台的主流 UI 样式指南自动分配子级周围的默认边距。如此定义的每个边距都可以通过分配适当的布局参数来独立地覆盖。默认值通常会在组件之间产生合理的间距，但默认值可能会在平台的不同版本之间发生变化。")]),t._v(" "),s("p",[s("strong",[t._v("多余的空间分布")])]),t._v(" "),s("p",[t._v("从 API 21开始，GridLayout 的剩余空间分布符合重量原则。如果未指定权重，则遵循先前的约定，并且如果列和行的视图在其组内指定某种形式的对齐方式，则将其视为灵活的。")]),t._v(" "),s("p",[t._v("因此，视图的灵活性受其"),s("strong",[t._v("对齐方式")]),t._v("的影响，对齐方式通常通过设置"),s("code",[t._v("layout_gravity")]),t._v("子级布局参数的属性来定义 。如果沿给定的"),s("strong",[t._v("轴")]),t._v("定义了"),s("strong",[t._v("权重")]),t._v("或"),s("strong",[t._v("对齐")]),t._v("方式，则该组件将在该方向上"),s("em",[t._v("具有柔韧性")]),t._v("。如果未设置权重或对齐方式，则假定该组件"),s("em",[t._v("不灵活")]),t._v("。")]),t._v(" "),s("p",[t._v("同一行或列组中的多个组件被认为是"),s("em",[t._v("并行运行的")]),t._v("。仅当其中的"),s("em",[t._v("所有")]),t._v("组件都是灵活的时，这样的组才是灵活的。位于公共边界两侧的行和列组将被视为"),s("em",[t._v("串联操作")]),t._v("。如果这两个元素"),s("em",[t._v("之一")]),t._v("组成的复合组是柔性的，则该复合组是柔性的。")]),t._v(" "),s("p",[t._v("要使列拉伸，请确保其中的所有组件都定义了权重或重力。若要防止列拉伸，请确保列中的某个组件未定义"),s("code",[t._v("weight")]),t._v(" 或 "),s("code",[t._v("gravity")]),t._v("。")]),t._v(" "),s("p",[t._v("当灵活性原则不能完全消除歧义时，GridLayout 的算法倾向于更接近其右边缘和下边缘的行和列。更准确地说，GridLayout 将其每个布局参数视为一组变量中的约束，这些变量定义了沿给定轴的网格线。在布局过程中，GridLayout 解决约束，以便将唯一的解决方案返回到所有变量小于或等于任何其他有效解决方案中相应值的约束。")]),t._v(" "),s("p",[s("strong",[t._v("注意GONE")])]),t._v(" "),s("p",[t._v("出于布局目的，GridLayout 将可见性状态为“已消失”的视图视为具有零宽度和零高度。这与忽略被标记为完全消失的视图的策略有着微妙的区别。例如，如果一个已标记的视图在一列中是单独的，则当且仅当视图上未定义重力时，该列将自身折叠为零宽度。如果定义了重力，则已标记的视图对布局没有影响，容器的布局应与从未添加视图一样。在多余的空间分布期间，过去的视图被认为是零权重的。")]),t._v(" "),s("p",[t._v("这些语句同样适用于行和列，以及行或列的组。")]),t._v(" "),s("p",[t._v("有关 GridLayout 使用的布局参数的完整描述，请参见 "),s("a",{attrs:{href:"https://developer.android.google.cn/reference/android/widget/GridLayout.LayoutParams",target:"_blank",rel:"noopener noreferrer"}},[t._v("GridLayout.LayoutParams"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"相关属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关属性"}},[t._v("#")]),t._v(" 相关属性")]),t._v(" "),s("p",[s("strong",[t._v("全局属性（GridLayout的属性）")])]),t._v(" "),s("ul",[s("li",[t._v("orientation：设置排列方式，"),s("code",[t._v("vertical")]),t._v("（垂直方向，默认属性），"),s("code",[t._v("horizontal")]),t._v("（水平方向）。")]),t._v(" "),s("li",[t._v("rowCount：设置布局的行数。")]),t._v(" "),s("li",[t._v("columnCount：设置布局的列数。")])]),t._v(" "),s("p",[s("strong",[t._v("局部属性（GridLayout的内部组件属性）")])]),t._v(" "),s("ul",[s("li",[t._v("layout_row：指定组件所在"),s("strong",[t._v("行")]),t._v("的位置，索引位置从 0 开始。")]),t._v(" "),s("li",[t._v("layout_column：指定组件所在"),s("strong",[t._v("列")]),t._v("的位置，索引位置从 0 开始。")]),t._v(" "),s("li",[t._v("layout_rowSpan：设置占用几行空间。")]),t._v(" "),s("li",[t._v("layout_columnSpan：设置占用几列空间。")])]),t._v(" "),s("p",[t._v("如果需要了解 GridLayout 的更多属性，请参考"),s("a",{attrs:{href:"https://developer.android.google.cn/reference/android/widget/GridLayout",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方API"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("网格布局中在可以不指定 "),s("code",[t._v("layout_width")]),t._v(" 和 "),s("code",[t._v("layout_heigh")]),t._v(" 属性，可以自适应内容的网格大小。设置组件横跨几行或者几列后，可以根据需要设置一个填充属性："),s("code",[t._v('android:layout_gravity = "fill"')]),t._v("。")]),t._v(" "),s("p",[t._v('如：layout_gravity="fill"，android:layout_rowSpan="2"， 表示在水平方向上填充组件所占用的 '),s("code",[t._v("2")]),t._v(" 行空间。")])]),t._v(" "),s("p",[s("strong",[t._v("理解示意图：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/android/base/layout_demo_gridlayout_sketch.png",alt:"网格布局示意图"}})]),t._v(" "),s("h2",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="utf-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("GridLayout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("match_parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrap_content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("rowCount")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("columnCount")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("orientation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("horizontal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_row")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("background")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#2196F3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_column")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("background")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#FF5722"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_rowSpan")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_gravity")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("background")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#FFC107"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_columnSpan")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_gravity")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("background")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#E91E63"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("9"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("visibility")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("gone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("GridLayout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"示例效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例效果"}},[t._v("#")]),t._v(" 示例效果")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/android/base/layout_demo_gridlayout.png",alt:"网格布局效果图"}})]),t._v(" "),s("p",[t._v("通过本节知道网格布局是"),s("strong",[t._v("矩形网格")]),t._v("的一种布局，常用于需要网格化布局显示的场景，如：在线商城商品的展示布局场景。")])])}),[],!1,null,null,null);a.default=e.exports}}]);