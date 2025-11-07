<script setup>
// document.getElementById('submitBtn').addEventListener('click', function () {
//   const message = document.getElementById('messageInput').value.trim();
//   if (!message) return;
//
//   // 清空之前的响应内容
//   document.getElementById('response').innerText = '';
//
//   // 创建 EventSource 对象来接收流式数据
//   const eventSource = new EventSource(
//       `http://127.0.0.1:8999/deepseek/chatStream?msg=${encodeURIComponent(message)}`);
//
//   let currentLine = '';
//   const responseDiv = document.getElementById('response');
//
//   eventSource.onmessage = function (event) {
//     const data = event.data;
//     for (let char of data) {
//       if (currentLine.length >= 30) {
//         responseDiv.innerText += currentLine + '\n';
//         currentLine = '';
//       }
//       currentLine += char;
//     }
//     // 处理剩余字符
//     if (data.length > 0 && currentLine.length > 0) {
//       responseDiv.innerText += currentLine;
//       currentLine = '';
//     }
//   };
//
//   eventSource.onerror = function (error) {
//     console.error('EventSource failed:', error);
//     eventSource.close();
//   };
//
//   // 关闭 EventSource 连接（例如在用户输入新消息时）
//   document.getElementById('messageInput').addEventListener('input', function () {
//     eventSource.close();
//   });
// });
</script>

<template>
  <div class="container">
    <h1>接入DeepSeek大模型,部署聊天界面</h1>

    <div class="input-group">
      <input id="messageInput" placeholder="请输入问题..." type="text">
      <button id="submitBtn">提交</button>
    </div>

    <div id="response"></div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.input-group {
  margin-bottom: 10px;
}

.input-group input {
  width: 70%;
  padding: 8px;
  box-sizing: border-box;
}

.input-group button {
  padding: 8px 12px;
  cursor: pointer;
}

#response {
  border: 1px solid #ccc;
  padding: 10px;
  height: 200px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
