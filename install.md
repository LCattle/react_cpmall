

## Vagrant 虚拟化安装步骤
1. 下载地址：https://www.vagrantup.com/downloads.html 根据提示一步步安装,
2. 装好以后运行 vagrant box add va <name>，va指box的名字，name为下载的package.box， 可能需要等待一段时间
3. 替换 Vagrantfile 文件（该文件在cpmall_react项目根目录下）
4. vagrant up     # 启动环境
5. vagrant ssh  # SSH 登录
6. cd /vagrant/cpmall_react  # 切换到开发目录
7. 建立映射目录  # ln -s  ~/coolpad/cpmall_react/node_modules ./node_modules
8. 启动 npm run dev   在浏览器运行：localhost:3000

## 遗漏需要自行安装的包

``` bash
$ cd ~/coolpad/cpmall_react/
$ cnpm install --save-dev babel-plugin-react-html-attrs
$ cnpm install pm2 -g  # 监控
$ cnpm install --save-dev react-addons-perf
$ cnpm install node-uuid --save-dev
$ cnpm install --save-dev react-addons-linked-state-mixin
```
