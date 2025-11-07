<script setup>
//修改事件
import {ElMessage, ElMessageBox} from "element-plus";
import {markRaw, ref} from "vue";
import {Check, Delete, Edit, Plus, Search, Warning} from "@element-plus/icons-vue";

const centerDialogVisible = ref(false)
const centerDialogVisibles = ref(false)
const centerDialogVisible1 = ref(false)

const form = ref({
  no: 0,
  name: '',
  age: 0,
  sex: '',
  phone: '',
  email: ''
})

const from = ref({
  name: '',
  age: 0,
  sex: '',
  phone: '',
  email: ''
})

const addSubmitForm = () => {
  //把添加模态框中获得的数据追加到tableData
  tableData.value.push(form.value);
  ElMessage.success("数据添加成功");
  centerDialogVisible.value = false;
}

const submitForm = () => {
  ElMessage.success("数据修改成功");
  centerDialogVisible1.value = false;
}

const add = () => {
  centerDialogVisible.value = true;
}

const update = (row) => {
  centerDialogVisible1.value = true;
  form.value = row;
}
//row得到当前这一行数据的对象
const query = (row) => {
  centerDialogVisibles.value = true;
  from.value.name = row.name;
  from.value.age = row.age;
  from.value.sex = row.sex;
  from.value.phone = row.phone;
  from.value.email = row.email;
}

const del = (index) => {
  ElMessageBox.confirm('确定删除这条数据吗？', '警告', {
    type: 'warning',
    icon: markRaw(Warning),
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    draggable: true
  })
      .then(() => {
        tableData.value.splice(index, 1)
        ElMessage.success('数据删除成功')
      })
      .catch(() => {
        // catch error
      })
}

const tableData = ref([
  {
    no: 1,
    name: 'Emma',
    age: 19,
    sex: '女',
    phone: '13579246810',
    email: 'a3f7g9@163.com'
  },
  {
    no: 2,
    name: 'Liam',
    age: 18,
    sex: '男',
    phone: '13824681357',
    email: 'bc8d2e@qq.com'
  },
  {
    no: 3,
    name: 'Olivia',
    age: 19,
    sex: '女',
    phone: '13975318642',
    email: 'k9m1n5@163.com'
  },
  {
    no: 4,
    name: 'Noah',
    age: 17,
    sex: '男',
    phone: '13146803579',
    email: 'p4q6r2@qq.com'
  },
  {
    no: 5,
    name: 'Ava',
    age: 20,
    sex: '女',
    phone: '13792468013',
    email: 'x7y3z9@163.com'
  },
  {
    no: 6,
    name: 'William',
    age: 22,
    sex: '男',
    phone: '13245768901',
    email: 'h5j8l1@qq.com'
  },
  {
    no: 7,
    name: 'Sophia',
    age: 21,
    sex: '女',
    phone: '13467985201',
    email: 'v3b6n4@163.com'
  },
  {
    no: 8,
    name: 'James',
    age: 19,
    sex: '男',
    phone: '13698712345',
    email: 'd8f2s7@qq.com'
  },
])
</script>

<template>
  <div class="user">
    <!--第一行-->
    <el-row>
      <el-col :span="5">
        <div class="sc">
          <el-input :prefix-icon="Search" placeholder="请输入用户名" style="width: 240px"/>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="bt">
          <el-button round type="primary">查&nbsp;&nbsp;询</el-button>
        </div>
      </el-col>
      <el-col :offset="7" :span="2">
        <div class="add">
          <el-button :icon="Plus" round type="primary" @click="add">添&nbsp;&nbsp;加</el-button>
        </div>
      </el-col>
    </el-row>
    <!--第二行-->
    <el-row>
      <el-col>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column align="center" label="学号" prop="no" width="80"/>
          <el-table-column align="center" label="姓名" prop="name" width="100"/>
          <el-table-column align="center" label="年龄" prop="age" width="80"/>
          <el-table-column align="center" label="性别" prop="sex" width="80"/>
          <el-table-column align="center" label="手机号" prop="phone" width="130"/>
          <el-table-column align="center" label="邮箱" prop="email" width="150"/>
          <el-table-column align="center" label="操作" width="300">
            <template #default="scope">
              <el-button :icon="Edit" round size="small" type="primary" @click="update(scope.row)">修改</el-button>
              <el-button :icon="Check" round size="small" type="success" @click="query(scope.row)">查看</el-button>
              <el-button :icon="Delete" round size="small" type="danger" @click="del(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-pagination :total="200" background layout="prev, pager, next"/>
      </el-col>
    </el-row>
  </div>

  <!--添加模态框-->
  <el-dialog v-model="centerDialogVisible" center title="添加学生信息" width="500">
    <el-form :label-position="right" :model="form" label-width="90px">
      <el-form-item label="学号:" prop="name" required>
        <el-input v-model="form.no"/>
      </el-form-item>
      <el-form-item label="姓名:" prop="name" required>
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="年龄:" prop="age" required>
        <el-input v-model="form.age"/>
      </el-form-item>
      <el-form-item label="性别:" prop="sex" required>
        <el-radio-group v-model="form.sex">
          <el-radio value="男">男</el-radio>
          <el-radio value="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机号:" prop="phone" required>
        <el-input v-model="form.phone"/>
      </el-form-item>
      <el-form-item label="邮箱:" prop="email" required>
        <el-input v-model="form.email"/>
      </el-form-item>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addSubmitForm">提交</el-button>
      </div>
    </el-form>
  </el-dialog>

  <!--查看模态框-->
  <el-dialog v-model="centerDialogVisibles" center title="查看学生信息" width="500">
    <el-form :label-position="right" label-width="90px">
      <el-form-item label="姓名:" prop="name" required>
        <el-input v-model="from.name" readonly/>
      </el-form-item>
      <el-form-item label="年龄:" prop="age" required>
        <el-input v-model="from.age" readonly/>
      </el-form-item>
      <el-form-item label="性别:" prop="sex" required>
        <el-radio-group v-model="from.sex" @click.prevent>
          <el-radio value="男">男</el-radio>
          <el-radio value="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机号:" prop="phone" required>
        <el-input v-model="from.phone" readonly/>
      </el-form-item>
      <el-form-item label="邮箱:" prop="email" required>
        <el-input v-model="from.email" readonly/>
      </el-form-item>
      <div class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisibles = false">关闭</el-button>
      </div>
    </el-form>
  </el-dialog>

  <!--修改模态框-->
  <el-dialog v-model="centerDialogVisible1" center title="修改学生信息" width="500">
    <el-form :label-position="right" :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="序号:" prop="no" required>
        <el-input v-model="form.no"/>
      </el-form-item>
      <el-form-item label="姓名:" prop="name" required>
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="年龄:" prop="age" required>
        <el-input v-model="form.age"/>
      </el-form-item>
      <el-form-item label="性别:" prop="sex" required>
        <el-radio-group v-model="form.sex">
          <el-radio value="男">男</el-radio>
          <el-radio value="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机号:" prop="phone" required>
        <el-input v-model="form.phone"/>
      </el-form-item>
      <el-form-item label="邮箱:" prop="email" required>
        <el-input v-model="form.email"/>
      </el-form-item>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible1 = false">取消</el-button>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<style scoped>
.dialog-footer {
  display: flex;
  justify-content: center; /* 主轴上（水平）居中 */
  margin-top: 20px;
}

.user .el-pagination {
  margin-top: 20px;
}

.user .el-table {
  margin-top: 20px;
}

.user .el-input {
  margin-left: 10px;
}

.add {
  width: 100px;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
}

.bt {
  width: 100px;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
}

.sc {
  width: 300px;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
}
</style>
