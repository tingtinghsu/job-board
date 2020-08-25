document.addEventListener('DOMContentLoaded', ()=>{

  let form = document.forms[0]
  form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e)
    let inputAll = document.querySelectorAll('input')
    let inputJob = inputAll[0].value
    let inputLocation = inputAll[1].value
    let inputChecked = inputAll[2].checked
    let inputFullTime = '' 

    let result = {
      inputJob,
      inputLocation,
      inputFullTime,
      url: "https://still-spire-37210.herokuapp.com/positions.json?"
    }
    let searchUrl = ''

    if (inputChecked) {
      inputFullTime = 'on',
      searchUrl = result.url + `description=` + inputJob + `&location=` +  inputLocation + `&full_time=` + inputFullTime
    } else {
      searchUrl = result.url + `description=` + inputJob + `&location=` +  inputLocation;

      fetchJob(searchUrl);
      document.getElementsByTagName("BODY")[0].dataset.url = searchUrl
      console.log("URL: "+ document.getElementsByTagName("BODY")[0].dataset.url)
    }
   
  })

  document.querySelector('.pagination-next').addEventListener('click',function(e){
    // 按的時候當前頁數+1
    let nextPage = Number(document.getElementsByTagName("BODY")[0].dataset.page)+1
    document.getElementsByTagName("BODY")[0].dataset.page = nextPage
    let nextUrl = document.getElementsByTagName("BODY")[0].dataset.url + "&page=" + nextPage
    fetchJob(nextUrl);
  })
})

function fetchJob(searchUrl) {
  fetch(searchUrl)
  .then(response => response.json())
  .then(jobs => {
    console.log(jobs.length)

    if(jobs.length > 10){
      document.querySelector('.pagination-next').removeAttribute('disabled');
    }
    jobs.forEach(job => {
      
      const table = document.querySelector(".table")
      const template = document.querySelector("#job-template")
      const jobDescription = template.content.querySelector('h4')
      const jobCompany = template.content.querySelector('.company')
      const jobFullTime = template.content.querySelector('.fulltime')
      const jobLocation = template.content.querySelector('.location')

      jobDescription.innerHTML = job.title
      jobCompany.innerHTML = job.company
      jobFullTime.innerHTML = job.type
      jobLocation.innerHTML = job.location
      
      const clone = document.importNode(template.content, true)
      table.appendChild(clone)
    })
  })
}