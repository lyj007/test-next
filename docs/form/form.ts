/* eslint-disable */
export default {"content":{"tag":"div","children":[{"tag":"article","children":[{"tag":"h1","children":"Form 表单","attrs":{"id":"form-Form表单","--title-color":"rgba(0, 0, 0, 0.85)"}},{"tag":"p","children":"具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。","attrs":{}},{"tag":"h2","children":"何时使用","attrs":{"id":"form-何时使用","--title-color":"rgba(0, 0, 0, 0.85)"}},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":"用于创建一个实体或收集信息。","attrs":{}}],"attrs":{}},{"tag":"li","children":[{"tag":"p","children":"需要对输入的数据类型进行校验时。","attrs":{}}],"attrs":{}}],"attrs":{}},{"tag":"h2","children":"表单域","attrs":{"id":"form-表单域","--title-color":"rgba(0, 0, 0, 0.85)"}},{"tag":"p","children":"表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。","attrs":{}},{"tag":"p","children":["这里我们封装了表单域 ",{"tag":"code","children":"<Form.Item />","attrs":{}}," 。"],"attrs":{}},{"tag":"pre","attrs":{"lang":"jsx"},"children":[{"tag":"code","children":"<Form.Item {...props}>{children}</Form.Item>","attrs":{}}]},{"tag":"h2","children":"API","attrs":{"id":"form-API","--title-color":"rgba(0, 0, 0, 0.85)"}},{"tag":"h3","children":"Form","attrs":{}},{"tag":"table","children":[{"tag":"thead","children":[{"tag":"tr","children":[{"tag":"th","children":"参数","attrs":{}},{"tag":"th","children":"说明","attrs":{}},{"tag":"th","children":"类型","attrs":{}},{"tag":"th","children":"默认值","attrs":{}}],"attrs":{}}],"attrs":{}},{"tag":"tbody","children":[{"tag":"tr","children":[{"tag":"td","children":"labelAlign","attrs":{}},{"tag":"td","children":"label 标签的文本对齐方式","attrs":{}},{"tag":"td","children":["'left' ","|"," 'right'"],"attrs":{}},{"tag":"td","children":"'right'","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"labelStyle","attrs":{}},{"tag":"td","children":"label 的样式","attrs":{}},{"tag":"td","children":"React.CSSProperties","attrs":{}},{"tag":"td","children":"-","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"onFinish","attrs":{}},{"tag":"td","children":"数据验证成功后回调事件","attrs":{}},{"tag":"td","children":"Function(values)","attrs":{}},{"tag":"td","children":[],"attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"onFinishFailed","attrs":{}},{"tag":"td","children":"数据验证失败后回调事件","attrs":{}},{"tag":"td","children":"Function(errors)","attrs":{}},{"tag":"td","children":[],"attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"onValuesChange","attrs":{}},{"tag":"td","children":"字段发生变化的回调","attrs":{}},{"tag":"td","children":"Function(values)","attrs":{}},{"tag":"td","children":[],"attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"labelCol","attrs":{}},{"tag":"td","children":["label 标签布局，同 ",{"tag":"code","children":"<Col>","attrs":{}}," 组件，设置 ",{"tag":"code","children":"span","attrs":{}}," ",{"tag":"code","children":"offset","attrs":{}}," 值，如 ",{"tag":"code","children":"{span: 3, offset: 12}","attrs":{}}," 或 ",{"tag":"code","children":"sm: {span: 3, offset: 12}","attrs":{}}],"attrs":{}},{"tag":"td","children":[{"tag":"span","children":"object","attrs":{}}],"attrs":{}},{"tag":"td","children":[],"attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"wrapperCol","attrs":{}},{"tag":"td","children":"需要为输入控件设置布局样式时，使用该属性，用法同 labelCol","attrs":{}},{"tag":"td","children":[{"tag":"span","children":"object","attrs":{}}],"attrs":{}},{"tag":"td","children":[],"attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"name","attrs":{}},{"tag":"td","children":"表单名称","attrs":{}},{"tag":"td","children":"string","attrs":{}},{"tag":"td","children":"null","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"colon","attrs":{}},{"tag":"td","children":"配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)","attrs":{}},{"tag":"td","children":"boolean","attrs":{}},{"tag":"td","children":"true","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"validateTrigger","attrs":{}},{"tag":"td","children":"配置Form校验触发器","attrs":{}},{"tag":"td","children":"string","attrs":{}},{"tag":"td","children":"onChange","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"getFieldsValue","attrs":{}},{"tag":"td","children":"获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 getFieldsValue(true) 时返回所有值","attrs":{}},{"tag":"td","children":"(names: string[]","attrs":{}},{"tag":"td","children":"boolean) => void","attrs":{}},{"tag":"td","children":"--","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"getFieldValue","attrs":{}},{"tag":"td","children":"获取一个字段名对应的值","attrs":{}},{"tag":"td","children":"(name: string) => void","attrs":{}},{"tag":"td","children":"--","attrs":{}}],"attrs":{}}],"attrs":{}}],"attrs":{}},{"tag":"h3","children":"FormItem","attrs":{}},{"tag":"table","children":[{"tag":"thead","children":[{"tag":"tr","children":[{"tag":"th","children":"参数","attrs":{}},{"tag":"th","children":"说明","attrs":{}},{"tag":"th","children":"类型","attrs":{}},{"tag":"th","children":"默认值","attrs":{}}],"attrs":{}}],"attrs":{}},{"tag":"tbody","children":[{"tag":"tr","children":[{"tag":"td","children":"name","attrs":{}},{"tag":"td","children":"字段名称 可以通过.来标记层级 如address.province, address.city等","attrs":{}},{"tag":"td","children":"string","attrs":{}},{"tag":"td","children":"null","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"label","attrs":{}},{"tag":"td","children":"字段标签","attrs":{}},{"tag":"td","children":["React.ReactNode ","|"," string"],"attrs":{}},{"tag":"td","children":"null","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"valuePropName","attrs":{}},{"tag":"td","children":"子节点的值的属性，如 Switch 的是 'checked'。该属性为 getValueProps 的封装，自定义 getValueProps 后会失效","attrs":{}},{"tag":"td","children":"string","attrs":{}},{"tag":"td","children":"value","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"trigger","attrs":{}},{"tag":"td","children":"设置收集字段值变更的时机。","attrs":{}},{"tag":"td","children":"string","attrs":{}},{"tag":"td","children":"onChange","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"validateTrigger","attrs":{}},{"tag":"td","children":"设置字段校验的时机","attrs":{}},{"tag":"td","children":"string","attrs":{}},{"tag":"td","children":"onChange","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"validateFirst","attrs":{}},{"tag":"td","children":"当某一规则校验不通过时，是否停止剩下的规则的校验。设置 parallel 时会并行校验","attrs":{}},{"tag":"td","children":"boolean","attrs":{}},{"tag":"td","children":"false","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"initialValue","attrs":{}},{"tag":"td","children":"设置子元素默认值","attrs":{}},{"tag":"td","children":"string","attrs":{}},{"tag":"td","children":"null","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"required","attrs":{}},{"tag":"td","children":"必填样式设置。如不设置，则会根据校验规则自动生成","attrs":{}},{"tag":"td","children":"boolean","attrs":{}},{"tag":"td","children":"false","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"labelCol","attrs":{}},{"tag":"td","children":["label 标签布局，同 ",{"tag":"code","children":"<Col>","attrs":{}}," 组件，设置 ",{"tag":"code","children":"span","attrs":{}}," ",{"tag":"code","children":"offset","attrs":{}}," 值，如 ",{"tag":"code","children":"{span: 3, offset: 12}","attrs":{}}," 或 ",{"tag":"code","children":"sm: {span: 3, offset: 12}","attrs":{}}],"attrs":{}},{"tag":"td","children":[{"tag":"span","children":"object","attrs":{}}],"attrs":{}},{"tag":"td","children":[],"attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"wrapperCol","attrs":{}},{"tag":"td","children":"需要为输入控件设置布局样式时，使用该属性，用法同 labelCol","attrs":{}},{"tag":"td","children":[{"tag":"span","children":"object","attrs":{}}],"attrs":{}},{"tag":"td","children":[],"attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"labelAlign","attrs":{}},{"tag":"td","children":"label 标签的文本对齐方式","attrs":{}},{"tag":"td","children":["'left' ","|"," 'right'"],"attrs":{}},{"tag":"td","children":"'right'","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"labelStyle","attrs":{}},{"tag":"td","children":"label 的样式","attrs":{}},{"tag":"td","children":"React.CSSProperties","attrs":{}},{"tag":"td","children":"-","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"colon","attrs":{}},{"tag":"td","children":"配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)","attrs":{}},{"tag":"td","children":"boolean","attrs":{}},{"tag":"td","children":"true","attrs":{}}],"attrs":{}},{"tag":"tr","children":[{"tag":"td","children":"validateTrigger","attrs":{}},{"tag":"td","children":"配置Form校验触发器","attrs":{}},{"tag":"td","children":"string","attrs":{}},{"tag":"td","children":"onChange","attrs":{}}],"attrs":{}}],"attrs":{}}],"attrs":{}},{"tag":"h2","children":"代码演示","attrs":{"id":"form-代码演示","--title-color":"rgba(0, 0, 0, 0.85)"}}],"attrs":{}}],"attrs":{}},"meta":{"category":"Components","subtitle":"表单","type":"数据录入","cols":1,"title":"Form"}}
        