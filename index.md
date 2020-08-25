# Ting's Job Search API

![](https://i.imgur.com/bpsODTE.gif). 
![](https://i.imgur.com/zE2NR8w.gif)  
 

 [GitHub Job API](https://jobs.github.com/api) 作為操作資料，以 [GitHub Job](https://jobs.github.com/) 為參考來實作純前端頁面


# 取得 GitHub Job API 資料
- [ ] GitHub Job API 文件 https://jobs.github.com/api
  - 在 postman 上操作 API，並且試著加上 params 看看取回來的結果
- [ ] 使用專案內的表單來組出正確的 request uri
  - 左側的表單上有三個 input 欄位，分別對應到 api 的 param `description` `location` `full_time`
  - 在點擊 `Search` 按鈕後，可以在表單上取得 input 內容並且組合成正確的 request uri ( 例如 `https://jobs.github.com/position.json?description=ruby&location=new york&full_time=true` )
- [ ] 使用 fetch_ api / axios / jQuery ajax 發送 request 
  - 因為 GitHub Job api 有設定 CORS，助教會在上課中另外提供 no CORS 的 proxy API
  - xhr 工具可以任選，如果要使用 axios 或 jQuery 請自行在專案內引入

# 取得的 JSON 資料 render 成 HTML 輸出在畫面上
- [ ] 將範例檔案上的 html 程式碼 作為 HTML template 來渲染 JSON 資料
  - 請注意在渲染前要將舊的畫面資料清空

# 新增分頁處理
- [ ] 當取回來的筆數為 50 筆，可以點選 `Next Page` 來 load 出更多的結果
  - GitHub API 單次最多可取得 50 筆資料
  - 取得下一頁資料後，請直接串接在原始資料的下方 
  - 如果回傳筆數少於 50 筆，代表沒有下一頁可以選，請將 `Next Page` 按鈕設定為 disable
- [ ] 第一次開啟頁面時預設讀取 `position.json` 的結果，並且一樣可以使用分頁功能


