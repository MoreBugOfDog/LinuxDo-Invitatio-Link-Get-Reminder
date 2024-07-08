# LinuxDo-Invitatio-Link-Get-Reminder
Get invitation links and alerts by requesting the LinuxDo Public Interest Invitation Link List.
## 项目介绍
很多人都想注册 [Linux Do 站](https://linux.do)，然而L站却需要邀请链接才能注册。
Linux Do站有一个公益的邀请链接池
https://linux.do/t/topic/36752?u=furrydoge
但是这个链接池呢，大部分时间都**没有邀请链接的**
一般只要有一个人贡献，一分钟内就一抢而空了。
因此，我做了一个脚本，通过请求这个链接池，查询是否有链接可用，一旦查询到就发送**系统级**的通知。
这样，就能第一时间上线注册，抢先一步了。
## 环境配置
1. nodejs ≥ 16
2. npm
3. git
## 使用
首先，克隆这个储存库并安装依赖
```bash
git clone https://github.com/MoreBugOfDog/LinuxDo-Invitatio-Link-Get-Reminder.git
npm install
```
然后，启动脚本
```bash
npm start
```
## 如何结束
结束这个脚本运行有两种方法
1. 在项目文件夹内，运行 ```npm run stop```
2. 打开cmd，输入 ```forever list``` 找到对应index.js的pid，然后输入 ```taskkill /pid <你的pid> -f``` 这里 ```<你的pid>```要换成上一步找到的pid


## Project Introduction
Many people want to sign up for [Linux Do Station](https://linux.do), yet L Station requires an invite link to sign up.
Linux Do Station has a public interest pool of invitation links
https://linux.do/t/topic/36752?u=furrydoge
But this pool of links, most of the time **there are no invitation links**.
It's usually empty within a minute if one person contributes.
So I made a script that queries this pool to see if there are any links available, and sends a **system level** notification as soon as it does.
This way, you'll be the first to register online and get a head start.
## Environment configuration
1. nodejs ≥ 16
2. npm
3. git
## Utilization
First, clone this repository and install the dependencies
```bash
git clone https://github.com/MoreBugOfDog/LinuxDo-Invitatio-Link-Get-Reminder.git
npm install
``
Then, start the script
``bash
npm start
``
## How to end it
There are two ways to end this script
1. In the project folder, run ``npm run stop``. 2.
2. Open cmd and type ```forever list``` to find the pid of index.js, then type ```taskkill /pid <your pid> -f``` where <your pid> is replaced with the pid you found in the previous step.