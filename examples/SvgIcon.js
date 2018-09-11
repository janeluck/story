// SvgIcon需要引入阿里妈妈的脚本，写该组件story时统一由该文件作为入口引入
require('../src/components/SvgIcon/fancy.svg')
import React, { PureComponent } from 'react'
import SvgIcon from '../src/components/SvgIcon'


export class HULI extends PureComponent {
    render() {
        return <SvgIcon type='huli' />
    }
}
export class HULI1 extends PureComponent {
    render() {
        return <SvgIcon type='huli' />
    }
}

export { SvgIcon }

