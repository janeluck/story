// SvgIcon需要引入阿里妈妈的脚本，写该组件story时统一由该文件作为入口引入
require('../src/components/SvgIcon/fancy.svg')
import React, { PureComponent } from 'react'
import SvgIcon from '../src/components/SvgIcon'
import _ from 'lodash'
const data = [
    'banma',
    'niu',
    'laohu',
    'zhu',
    'xiongmao',
    'shizi',
    'xiaoji',
    'pangxie',
    'kaola',
    'nainiu',
    'huhou',
    'jingyu',
    'ciwei',
    'huli',
    'hema',
    'lu',
    'daxiang',
    'maotouying',
    'gongji',
    'lang'
]

export class HULI extends PureComponent {
    render() {
        return <SvgIcon type='huli' />
    }
}
export class Zoo extends PureComponent {
    render() {

        return <div>
            {_.map(data, name => <SvgIcon key={name} type={name} />)}

        </div>
    }
}

export { SvgIcon }

