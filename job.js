document.addEventListener('DOMContentLoaded', ()=>{
  console.log("hi")
  let form = document.forms[0]
  form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e)
    let inputAll = document.querySelectorAll('input')
    let inputJob = inputAll[0].value
    // console.log(inputJob)
    let inputLocation = inputAll[1].value
    let inputChecked = inputAll[2].checked
    let inputFullTime = '' 
    // console.log(inputLocation)

    let result = {
      inputJob,
      inputLocation,
      inputFullTime,
      url: "https://jobs.github.com/positions.json?"
    }
    console.log(result)
    let searchUrl = ''

    if (inputChecked) {
      inputFullTime = 'on',
      searchUrl = result.url + `description=` + inputJob + `&location=` +  inputLocation + `&full_time=` + inputFullTime
      console.log(searchUrl) 
    } else {
      searchUrl = result.url + `description=` + inputJob + `&location=` +  inputLocation;
      console.log(searchUrl) 
    }
   
    // {inputJob: "ruby", inputLocation: "us"}

    //https://jobs.github.com/positions.json?utf8=%E2%9C%93&description=ruby&location=us&full_time=on

    // https://jobs.github.com/positions?utf8=%E2%9C%93&description=ruby&location=us&full_time=on
    
    // 
  })
})