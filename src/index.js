import Hello from './hello'
import imgSrc from './asset/web.png' // 返回一个 url
import logoSvg from './asset/web.svg' // 返回 data url
import testTxt from './asset/test.txt' // 返回 源文件
import imgFree from './asset/web.jpg' // 自动选择

Hello()

const img = document.createElement('img') // 创建一个 img标签
img.src = imgSrc // 将返回的 url 设置给 img标签 的 src 属性
document.body.appendChild(img) // 在 body 中加入 img标签

const img2 = document.createElement('img')
img2.src = logoSvg
document.body.appendChild(img2)

const block = document.createElement('div')
block.textContent = testTxt
document.body.appendChild(block)

const img3 = document.createElement('img')
img3.src = imgFree
document.body.appendChild(img3)