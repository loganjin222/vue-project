# npm install报错解决方法
卸载电脑中本有的node。  
安装node-v12.22.12，最后一步的Automatically install the necessary tools......勾选上。  
npm install。 


# 建立本地仓库和github远程仓库联系失败解决方法  
错误信息：
error: src refspec main does not match any
error: failed to push some refs to 'github.com:loganjin/vue-project.git'

解决方法：
在建立联系前git add和git commit一下。