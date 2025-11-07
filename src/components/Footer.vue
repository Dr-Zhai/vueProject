<script setup>
// 这里定义响应式数据或方法，此处是动态年份
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <!-- 版权信息 -->
      <div class="footer-section">
        <p class="copyright">&copy; {{ currentYear }} 学生信息管理系统. 保留所有权利.</p>
        <p class="company-info">HOYOWE小组 技术支持</p>
      </div>

      <div class="footer-links">
        <a class="footer-link" href="#">关于我们</a>
        <a class="footer-link" href="#">隐私政策</a>
        <a class="footer-link" href="#">使用条款</a>
        <a class="footer-link" href="#">联系我们</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #f8f9fa;
  color: #6c757d;
  border-top: 1px solid #e9ecef;
}

.footer-content {
  display: flex;
  justify-content: space-between; /* 左右分栏布局 */
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  flex-wrap: wrap; /* 在小屏幕上允许换行 */
  gap: 1rem; /* 元素之间的间距 */
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.copyright {
  margin: 0;
}

.company-info {
  margin: 0;
  font-size: 0.9rem;
  color: #adb5bd;
}

.footer-links {
  display: flex;
  gap: 1.5rem; /* 链接之间的间距 */
  flex-wrap: wrap; /* 小屏幕下链接换行 */
  justify-content: flex-end; /* 链接右对齐 */
}

.footer-link {
  color: #495057; /* 链接颜色 */
  text-decoration: none; /* 去除下划线 */
  transition: color 0.2s ease-in-out;
}

.footer-link:hover {
  color: #0d6efd; /* 悬停时变为蓝色 */
  text-decoration: underline; /* 悬停时显示下划线 */
}
</style>
