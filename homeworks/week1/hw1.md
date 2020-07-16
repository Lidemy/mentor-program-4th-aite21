## 交作業流程

遵循大原則
* 寫完當週作業後，觀看當週的「自我檢討」
* 根據自我檢討的內容修改作業
* 修改完常見錯誤才繳交作業
* 交完作業後從「參考解答」學習 Huli 的解法

執行步驟_第一次設定
1. 將 Memtor-program-4th-（自己帳號）的倉儲碼複製至 Locoal 本機 
2. 確認本機有無同名資料夾

執行步驟_例行步驟
1. 新開一個 Branch: `git branch week1`
2. 切換到 Branch 後寫作業:`git checkout week1`
3. 把寫好的 hw1.md 作業檔案加入 Commit:`git commit -am "week1 完成"`
4. 所有作業都寫完後到把本地 Branch 推到遠端`git push origin week1`
5. 到 Github 上按 Compare & Pull Request
6. 到 Lidemy 學習系統中的作業列表，貼上已 PR 到自己的遠端連結
7. 等作業批改完成顯示 Mergered 之後，切回 master:`git checkout master`
8. 讓遠端 Master 跟本機 Master 同步：`git pull origin master`
9. 刪除本機的 Branch :`git branch -d week1`
10. 檢查 Branch 是否被刪掉：`git branch -v`
11. 完成