## 請解釋後端與前端的差異。
在網頁流程中，前端主要負責瀏覽器到 Server 之間（如步驟 1、3 ），後端則負責 Server 存取資料庫（如步驟 2 ）

1. 瀏覽器→ 傳送 Request 給 Server
2. Server→ 去資料庫存取資料後 
3. Server→ 回傳 Response 給瀏覽器

****
## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. 瀏覽器會去問 DNS 伺服器：Google.com 的 IP 位址
2. DNS 回傳位址：172.217.27.142
3. 瀏覽器傳送 Request 給 172.217.27.142 的 Server
4. 位在 172.217.27.142 的 Server 收到查詢 JavaScript 的請求
5. Server 去問資料庫，查詢 JavaScript 的相關內容
6. 資料庫找到了，存取搜尋到的資料回傳給 Server
7. Server 傳送一個 Response 給瀏覽器
8. 瀏覽器將查詢的結果顯示出來

****
## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
* `nslookup 網域名稱`:查詢 IP 位址
* `clear`:清除畫面上的內容
* `cal`: 印出日曆