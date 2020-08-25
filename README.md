# Ting's Job Search API

![](https://i.imgur.com/Q2ic7wX.gif)  
![](https://i.imgur.com/zE2NR8w.gif)  
 

 [GitHub Job API](https://jobs.github.com/api) 作為操作資料，以 [GitHub Job](https://jobs.github.com/) 為參考來實作純前端頁面


## 任務清單

### Task 1

目標：完成手機版 navbar 選單顯示
- [ ] 本專案是使用 [Bulma](https://bulma.io/documentation/) 作為 css 框架，可以快速的瀏覽一下它的使用方式
- [ ] 完成 index.js - 在手機版頁面點擊漢堡圖示顯示選單
  - Bulma 的 navbar 會自動變成漢堡選單，但選單的觸發必須套上 `.is-active` 的 class 顯示 （請參考 https://bulma.io/documentation/components/navbar/#navbar-menu）
  - 請新增一個 index.js 檔案，並且在漢堡選單上套用點擊事件，讓畫面可以在手機版的版型正確顯示 menu 清單

### Task 2

目標：取得 GitHub Job API 資料
- [ ] 請先閱讀 GitHub Job API 文件 https://jobs.github.com/api
  - 請試著在 postman 上操作 API，並且試著加上 params 看看取回來的結果
- [ ] 使用專案內的表單來組出正確的 request uri
  - 左側的表單上有三個 input 欄位，分別對應到 api 的 param `description` `location` `full_time`
  - 在點擊 `Search` 按鈕後，可以在表單上取得 input 內容並且組合成正確的 request uri ( 例如 `https://jobs.github.com/position.json?description=ruby&location=new york&full_time=true` )
- [ ] 使用 fetch_ api / axios / jQuery ajax 發送 request 
  - 因為 GitHub Job api 有設定 CORS，助教會在上課中另外提供 no CORS 的 proxy API
  - xhr 工具可以任選，如果要使用 axios 或 jQuery 請自行在專案內引入
  - 取得的結果直接 console.log 印出即可
  - note: github api 說明有誤，應該是要給 `full_time=on`

### Task 3

目標：將取得的 JSON 資料 render 成 HTML 輸出在畫面上
- [ ] 將範例檔案上的 html 程式碼 作為 HTML template 來渲染 JSON 資料
  - 請注意在渲染前要將舊的畫面資料清空

### Task 4

目標：新增分頁處理
- [ ] 當取回來的筆數為 50 筆，可以點選 `Next Page` 來 load 出更多的結果
  - GitHub API 單次最多可取得 50 筆資料
  - 取得下一頁資料後，請直接串接在原始資料的下方 
  - 如果回傳筆數少於 50 筆，代表沒有下一頁可以選，請將 `Next Page` 按鈕設定為 disable
- [ ] 第一次開啟頁面時預設讀取 `position.json` 的結果，並且一樣可以使用分頁功能


### Task 5

目標: 發布成果到 GitHub Page 上
- [ ] 發布自己的 proxy server 到 heroku 上
  - 你可以直接 fork 本次 [proxy server 的 repo](https://github.com/spreered/js-workshop-server)
- [ ] 發布頁面到 GitHub Page 上
- [ ] 調整 proxy server 的 CORS 設定
  - 請使用[rack-cors](https://github.com/cyu/rack-cors) 來設定 CORS
  - allow origin 請設定自己的 github page 就好

