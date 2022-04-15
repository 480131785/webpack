import Hello from './hello'
import './index.css'
import _ from 'lodash' // 引入 lodash
import './async_module'
// import Print from './print';

Hello()

const button = document.createElement('button')
button.textContent = '点击执行加法'
button.addEventListener('click', () => {
    import(/* webpackChunkName: 'math',webpackPrefetch: true */'./math.js').then(({ add }) => { // 动态引入
        console.log(add(3, 4))
    })
})
// document.body.appendChild(button.onclick = Print.bind(null, 'Hello webpack!'))