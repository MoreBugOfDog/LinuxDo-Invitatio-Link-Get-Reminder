const https = require('https');
const notifier = require('node-notifier');

function checkInvites() {
  const options = {
    hostname: 'linuxdo-invites.speedcow.top',
    path: '/list',
    method: 'GET'
  };

  const req = https.request(options, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        if (json.aliveInvites !== '0') {
          // 获取邀请链接
          const aliveUrl = json.aliveUrl;
          // 发出Windows通知，包括邀请链接
          notifier.notify({
            title: '有新的邀请!',
            message: `邀请链接: ${aliveUrl}`,
            sound: true,
            wait: true
          }, (err, response) => {
            if (err) {
              console.error('发送通知失败:', err);
            }
          });
        }
      } catch (e) {
        console.error('解析JSON出错:', e.message);
      }
    });
  });

  req.on('error', error => {
    console.error('请求失败:', error);
  });

  req.end();
}

// 每隔1分钟检查一次
setInterval(checkInvites, 60000);
