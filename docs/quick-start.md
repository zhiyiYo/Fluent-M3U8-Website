# Quick Start

## Download Software
Click [here](/download) to download the latest version of Fluent M3U8.

If the software fails to start on Windows, please try running it with administrator privileges.

::: details Solution for macOS Warning about Damaged Application
1. Open "Terminal" and execute the following command:

    ```shell
    sudo spctl --master-disable
    ```

2. Open "System Preferences" - "Security & Privacy" tab, and check the option to allow software installation from "Any source."
3. Open "Terminal" and execute the following command:

    ```shell
    sudo xattr -dr com.apple.quarantine /Applications/Fluent-M3U8.app
    ```
:::

## Usage

<img src="/img/Fluent-M3U8.png" style="height: 30%"/>

### Single Video Download
1. Enter the download link in `.m3u8` or `.mpd` format.
2. Enter the name of the video file to save (without the extension).
3. Configure other interface options as needed.
4. Click the 【▶️ Download】 button.

### Batch Download
1. Create a new txt file.
2. Each line in the file represents a download task, formatted as `filename,url`, for example:

   ```txt
   Timer,http://devimages.apple.com/iphone/samples/bipbop/gear1/prog_index.m3u8
   Live,http://cdn3.toronto360.tv:8081/toronto360/hd/playlist.m3u8
   Dash,http://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-manifest.mpd
   ```

3. Drag the txt file directly into the software’s main interface, or enter the absolute path of the txt file.
4. Click the 【▶️ Download】 button.

### Task Management
<img src="/img/TaskInterface.png" style="height: 30%"/>

The download task interface displays all ongoing, completed, and failed download tasks. Click any card to enter batch operation mode, allowing users to manage multiple tasks simultaneously.