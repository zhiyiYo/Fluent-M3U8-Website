# 快速上手

## 下载软件
点击 [这里](/zh/download) 下载最新版本的 Fluent M3U8。

Windows 如果无法启动软件请使用管理员权限重试。

::: details macOS 提示应用程序已损坏的解决方案
1. 打开 “终端” 执行如下命令：

    ```shell
    sudo spctl --master-disable
    ```

2. 打开 “系统偏好设置” - “安全性与隐私” 标签页，勾选允许从 “任何来源” 安装软件
3. 打开 “终端” 执行如下命令：

    ```shell
    sudo xattr -dr com.apple.quarantine /Applications/Fluent-M3U8.app
    ```
:::

## 使用方法

<img src="/img/Fluent-M3U8.png" style="height: 30%"/>

### 单个视频下载
1. 填入 `.m3u8` 或者 `.mpd` 格式的下载链接
2. 填入保存的视频文件名（不包含后缀）
3. 根据需求配置其他界面选项
4. 点击【▶️ 下载】按钮

### 批量下载
1. 新建一个 txt 文件
2. 文件中每一行代表一个下载任务，格式为 `文件名,下载链接`，比如：

   ```txt
   Timer,http://devimages.apple.com/iphone/samples/bipbop/gear1/prog_index.m3u8
   Live,http://cdn3.toronto360.tv:8081/toronto360/hd/playlist.m3u8
   Dash,http://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-manifest.mpd
   ```

3. 将 txt 直接拖入软件的主页界面，或者填入 txt 文件的绝对路径
4. 点击【▶️ 下载】按钮

### 任务管理
<img src="/img/TaskInterface.png" style="height: 30%"/>

下载任务界面会展示所有下载中、下载完成和下载失败的任务，点击任意一个卡片即可进入批量操作模式，方便用户同时操作多个任务。