<template>
  <div class="setting">
    <div class="header">个人资料</div>
    <div class="setting__row">
      <div class="label">头像</div>
      <div class="content avatar__row">
        <el-upload
          :data="uploadData"
          class="avatar-uploader"
          action="http://10.200.154.101:3000/api/admin/avatar/upload"
          :show-file-list="false"
          :headers="headers"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
    <div class="setting__row">
      <div class="label">用户名</div>
      <div class="content">
        对对对
      </div>
    </div>
    <div class="setting__row">
      <div class="label">职位</div>
      <div class="content">
        对对对
      </div>
    </div>
    <div class="setting__row">
      <div class="label">公司</div>
      <div class="content">
        对对对
      </div>
    </div>
    <div class="setting__row">
      <div class="label">个人介绍</div>
      <div class="content">
        对对对
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageUrl: '',
      uploadData: {},
      headers: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    handleAvatarSuccess (response, file, fileList) {
      console.log(response)
      this.imageUrl = `data:image/jpg;base64, ${response.data.file}`
    },
    beforeAvatarUpload () {
      console.log('object')
    },
    init () {
      this.uploadData = {
        uid: localStorage.uid
      }
      let token = localStorage.getItem('token')
      this.headers['Authorization'] = `Bearer ${token}`
    }
  }
}
</script>

<style lang="less">
.setting {
  &__row {
    display: flex;
    .label {
      width: 180px;
    }
    .content {
      flex: 1;

      &.avatar__row {
        .avatar-uploader .el-upload {
          border: 1px dashed #d9d9d9;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
          border-color: #409EFF;
        }
        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 178px;
          height: 178px;
          line-height: 178px;
          text-align: center;
        }
        .avatar {
          width: 178px;
          height: 178px;
          display: block;
        }
      }
    }
  }
}
</style>
