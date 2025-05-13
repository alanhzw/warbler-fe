import type { NavList } from '../index';

const list: NavList = [
  {
    icon: 'https://tool.browser.qq.com/favicon.ico',
    name: '腾讯帮小忙',
    link: 'https://tool.browser.qq.com/',
    iconErrorText: '',
  },
  {
    icon: 'https://www.runjs.cool/favicon-32x32.png',
    name: '前端工具箱',
    link: 'https://www.runjs.cool/',
    iconErrorText: '',
  },
  {
    icon: '',
    name: '万能命令',
    link: 'https://wannengrun.net/zh/',
    iconErrorText: '',
  },
  {
    icon: '',
    name: '网页转换助手',
    link: 'http://www.mmhtml.com/zh/',
    iconErrorText: '',
  },
  {
    icon: 'https://static.jyshare.com/images/c-runoob-logo.ico',
    name: '菜鸟工具',
    link: 'https://c.runoob.com/',
    iconErrorText: '',
  },
  {
    icon: 'https://tools.miku.ac/favicon.ico',
    name: 'MikuTools',
    link: 'https://tools.miku.ac/',
    iconErrorText: '',
  },
  {
    icon: 'https://tool.lu/favicon.ico',
    name: '在线工具',
    link: 'https://tool.lu/',
    iconErrorText: '',
  },
  {
    icon: 'https://toolwa.com/favicon.ico',
    name: '工具哇',
    link: 'https://toolwa.com/',
    iconErrorText: '',
  },
  {
    icon: 'https://static.clewm.net/static/images/favicon.ico',
    name: '草料二维码',
    link: 'https://cli.im/',
    iconErrorText: '',
  },
  {
    icon: 'https://www.aconvert.com/favicon.ico',
    name: '格式转换',
    link: 'https://www.aconvert.com/cn/',
    iconErrorText: '',
  },
  {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDY1NDg3RDc3N0JFODExODNENjlCOEE4NDIwQ0ZCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNzIyRUYxOUU2OEMxMUU5OENDMkRGRDY2MUEyMUNEMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNzIyRUYxOEU2OEMxMUU5OENDMkRGRDY2MUEyMUNEMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBQzRBRDc4OEJFNkU5MTE5RDNFOEE4MDBCRkY0NDZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NjU0ODdENzc3QkU4MTE4M0Q2OUI4QTg0MjBDRkIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6G+jpQAAA/9JREFUeNq0V1lIlFEU/kZbjPYkEysospJGbBW1KAgX2qCHFIpepOVBBFHBpiQiIjIXFIveUiIhCcqXVoPqoZ0CM1qgtB5EsEItNR2TtHO8d3Lm/8//z6/pgY9h/nvvOd+992zXNbR+PRzKDMJOwlbCGsJSwmw99pPwhfCa8JBwi9DjRKnLAYFogoewjzDdIdlfhFpCMaHJbmKIzVgY4SzhHeHQKIxDzz2k1xZrXaMisIzwTO98CsYuvPaI1hVtT+DVKwVgHeGJvufxEtb1eFj3iB3hBDZsYJZ3CQsw/rJgWLeyITrhNH1Uq23VREQACQnA8uVAeDjw5w/Q0QG8eaN21tUVjAhNRCKhj/9M8hs4aWvc5QJSU4H0dMDtBqZONc/p7QWuXQOqqykILaMwTtvy+J8AO90HwmRnGYFSQloacOAAEBlpHm9tBXJzKTN8sdIwQFjFIerzgaOWxtlYUlLgN95dXR2QkQHU15vXLFwIXLigrkuWydrmsBPO1ElGmEbzSkuB8nIgPt483kfXePw4cOWK7CsVFUBoqBWJvWybCewQkwzf+YkTyrCPSEyMWc3QkDJ05455bOVK2to+u2S1gwkki8PZ2cD27YFXcf48sHixTKKoCPj2zTx2+DDtc6YVieQQ7ZWBwp6emWmePncucO6c+pUioLZW2CdtNCXFMiJCdASMCO/a47GOAD4BPvIwIb03NMhrOG9YpHwmMOvfX75vvne+fzuJjQXOnCEXNpSSzk55flSUlaZZnAf6xYJz+TJF6irzkt27VZz/S+ZEoqwM2LIleP4YoPDPyQFevvR9+c1bkHOnvxF/mTcv8P/gIFBYCLx9a2+c55065W+cpYsJNIsLHj2SFa1da/7m9QJ5eUBLizWBkhIpVJtDdHEwy4MHQHe3+fv+/cqzjcL3z8cr+cGlS6pGCIWJCdwXCfCuamrM37kCHjsmOyqfQFZWYCHiXXNaluU+E7itezizMIGPH83ft20D8vNlEk3UAhYUKIfj++Z750QlZA627auGFwkHRRKLFgFVVWrnRrl3Dzh9WiUho3ABa2yUx5RUcd/oI8BdynvLirhkCVBZqaqcUdraVP1nMj2OOnFfOaamAp9CT6ok0aH7/k3i9B8/gBs3VMyvWKGKk3+N2LxZFZ1EanT6Ka18/hyMAJVXXJVasudibTDmdk6tcXEqJzCp9nZ19y9eyAXJ3JIlaR/wI8D9nGoYnxLmY2LkO2Ej2WoiW0JXzAPk44SvE2D867BuZSPo04xP4nrQ63AufOx7pGea1cuIJ3INLdEeO1YZ0DoSrN6Idm9Dr26d3TpP9I7CcJ+Oc7fW4f2f17H/83yX4Xk+xxeohuf5TafP878CDADrJR+o7JYu7QAAAABJRU5ErkJggg==',
    name: '文件转换器',
    link: 'https://convertio.co/zh/',
    iconErrorText: '',
  },
  {
    icon: 'https://tools.pdf24.org/static/img/pdf24.png?v=5cf19973',
    name: 'PDF24 Tools',
    link: 'https://tools.pdf24.org/zh/all-tools',
    iconErrorText: '',
  },
  {
    icon: 'https://cilishenqi.icu/wp-content/themes/webstackpro/images/favicon.png',
    name: '磁力神器',
    link: 'https://cilishenqi.icu/',
    iconErrorText: '',
  },
  {
    icon: 'https://www.ilovepdf.com/img/favicons-pdf/favicon-32x32.png',
    name: 'i love pdf',
    link: 'https://www.ilovepdf.com/zh-cn',
    iconErrorText: '',
  },
  {
    icon: 'https://g.alicdn.com/sail-web/maas/2.7.45/favicon/128.ico',
    name: 'PDF 内容提取',
    link: 'https://www.modelscope.cn/studios/OpenDataLab/MinerU',
    iconErrorText: '',
  },
  {
    icon: 'https://pdf2doc.com/images/pdf2doc/favicon.svg',
    name: 'PDF转DOC',
    link: 'https://pdf2doc.com/zh/',
    iconErrorText: '',
  },
];

const listData = {
  title: '其它工具',
  list,
};

export default listData;
