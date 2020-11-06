## 請以自己的話解釋 API 是什麼
API 是（Application Programming Interface）的縮寫，為一種被定義好，作為軟體服務與電腦程式，進行操作溝通的介面工具。讓使用者與提供服務者，雙方都在在各自規範好的架構下互相交換資料。

以使用者角度就像是挑選想要的服務功能。
以服務提供者角度，就像提供一份功能列表的使用說明書，裡面包含了使用方式與權限。

像是在瀏覽一些官方網站或部落格網頁時，會出現 Google Map 的畫面輔助指引交通方式;或者是在網頁裡顯示 Instagram 或 SNS 動態消息，都是常見於生活中的 API 應用。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹

· The 204 (No Content):
	請求成功！預設可被快取的狀態，更新部分資源，但無同步更新顯示於使用者畫面。常見於使用 PUT 方法請求上傳檔案，若成功 204 回應中會加入 ETag （表頭欄位）作為快取驗證之用。

	應用範圍：線上文件編輯器的存檔動作、每月處理上千億的 Request 超大流量的網站，節省 API 的頻寬用量


· The 301 (Moved Permanently):
	目標資源指定給已被更新為永久的 URL （重新導向至新的網站）。與 The 308 相似，差別在於不得改變由 POST 到 GET 的請求方法原請求方法。

	應用範圍：短網址、官方網站URL變更（搬家）


· The 511 (Network Authentication Required):
	客户端需要通過驗證才能使用網路。由控制網路區域的代理服務器所發出之訊息，非主要源頭伺服器發送。

	應用範圍：公共區域或私人網路 Wifi 連線授權


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://bugerfarm.com

格式範例
對應行動說明：
[使用方法｜路徑｜參數｜範例]

·回傳所有餐廳資料
[GET｜/shops｜limit:限制回傳數量｜/shops?＿limit=15]
·回傳單一餐廳資料
[GET｜/shops/:id｜無｜/shops/3]
·刪除餐廳
[DELETE｜/shops/:id｜無｜無]
·新增餐廳
[POST｜/shops｜name:店名｜無]
·更改餐廳
[PATCH｜/shops/:id｜name:店名｜無]

<補充>
如和像 node xx.js list 這樣執行操作取得資料？
使用 `process.argv` 在 node.js 中執行新增對應行動('Available commands: list, read, delete, create and update')

程式範例 ex:
`switch(action) {
  case 'list':
    listShops();
    break;
 }`
