## 跟你朋友介紹 Git

「好啊。就像你知道 Git 是做版本控制。」
在這個大概念下，由一個名做為 Master 作為主軸，管理和紀錄每場表演和內容。

初步設定
1. 安裝 [Git](https://git-scm.com)
2. 打開終端機，進行初始化：`git init`

#### 你現在就是新生代笑話大師 Master 擁有三個主要段子，分別是 A、B、C。
*→ 這時候你可以使用 `git touch 檔案名稱` 新增檔案
→ 並將檔案加入索引`git add A` 或 `git add . ` (一次加入所有檔案 A、B、C)。
→ 輸入`git commit -m "ABC"`將 3 個檔案提交給 Git 倉儲，請它對他們進行版本控制和管理。
→ 最後用`git status`檢查一下動作狀態有沒有成功*

#### 假設今天你要演出一場個人秀，此時你會根據每場表演的性質，思考要怎麼把它們串起來，讓整場表演變得更連貫。你打算新增或刪減幾個不同的版本的 A、B、C 個笑話段子，和新增一個 D 的新段子，組合出像是 A1、B1、C1、D 的版本給在「Laugh Bar」的表演。

→ `git branch Laugh Bar` 新增一個名為 Laugh Bar 的 Branch，在 Laugh Bar Branch 中針對 A、B、C 個笑話段子修整為 A1、B1、C1，並利用上述方式新增 D 檔案 
→再次使用`git commit -m "ForLB"`儲存新的版本

#### 到這裡，你可能會想讓所有的檔案放至遠端（Git雲端倉儲）。所以現在我們可以透過雲端視覺化的倉儲管理介面 [Github](https://github.com) 來進行雲端和本機的資料同步。這裡有兩個重要的指令，分別是`git push`和`git pull`。前者為將本機檔案推至 Github 上面，後者為將在 Github 變更的檔案，同步拉回至本地電腦端。

當你想要將本機檔案推至 Github 上面，可以試著
→ 切換到 Master`git checkout master`
→ 執行本機同步 Github`git push origin master`

當你想要將新的分支推至 Github 上面，可以試著
→ 也可以切換到 ForLB 分支`git checkout ForLB`
→ 執行新的本機分支，同步 Github`git push origin ForLB`

相反的，某天你想在本機電腦修改檔案內容，發現內容是舊版的，因為前曾在 Github 上調整過，可以透過
要將 Github 上面最新的版本下載至本機

→ 切換到 Master`git checkout master` 
→ 執行 Github 下載至本機`git pull origin master` 就完成拉～

