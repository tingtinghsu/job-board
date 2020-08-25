document.addEventListener('DOMContentLoaded', ()=>{
  // console.log("hi")
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

    // ---字串串接---
    // console.log(inputLocation.split(" "))
    // console.log(inputLocation.split.length)
    // let locationStr = inputLocation.split(" ")
    // // console.log(locationStr)
    // let newLocationStr = ""
    // for(let i = 0;  i <= inputLocation.split.length; i++){
    //   newLocationStr << locationStr[i]
    //   console.log(newLocationStr)
    //   // locationStr = inputLocation[i] + '+'
    // }
    // console.log(locationStr)

    let result = {
      inputJob,
      inputLocation,
      inputFullTime,
      url: "https://still-spire-37210.herokuapp.com/positions.json?"
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
      // https://jobs.github.com/positions.json?description=Developer&location=North+York&full_time=on

      // axios.get(searchUrl)
      // .then((response) => { 
      //   console.log(response) 
      //   console.log(response.location)
      // })
      // .catch((error) => { console.error(error) })

      // https://still-spire-37210.herokuapp.com/positions.json?description=developer&location=Hamburg&full_time=on
      let textWrap = document.querySelector("#records-panel")
      fetch(searchUrl)
      .then(response => response.json())
      .then(jobs => {
        console.log(jobs)
        jobs.forEach(job => {
          // console.log(job.title)
          // console.log(job.company)
          // const template = document.querySelector("#job-template")
          const jobDescription = document.querySelector('h4')
          const jobCompany = document.querySelector('.company')
          const jobFullTime = document.querySelector('.fulltime')
          const jobLocation = document.querySelector('.location')
          console.log(jobLocation)
          console.log(job.location)
          jobDescription.innerHTML = job.title
          jobCompany.innerHTML = job.company
          jobFullTime.innerHTML = job.type
          jobLocation.innerHTML = job.location
          // console.log(template)
          // const clone = document.importNode(template.content, true)
          // console.log(clone)
          // document.querySelector('#job-panel').appendChild(clone)
          // textWrap.appendChild(clone)
        })
  
        // document.querySelector('.post-created-at').textContent = post.created_at;
        // document.querySelector('.post-author').textContent = post.author;
        // document.querySelector('.post-description').textContent = post.description;
        

      })

      //  ---fetch API---
      // fetch(searchUrl)
      // .then(response => response.json())
      // .then(posts => {
      //   console.log(response.json())
        // const post = posts[0];
  
        // document.querySelector('.post-created-at').textContent = post.created_at;
        // document.querySelector('.post-author').textContent = post.author;
        // document.querySelector('.post-description').textContent = post.description;
        
        // const postTitle = document.querySelector('.post-title');
        // const postLink = document.querySelector('.post-link');
  
        // postTitle.href = post.url;
        // postLink.href = post.url;
        // postLink.classList.remove('hidden');
      // })

      //  ---pastleo---
      // fetch('https://pastleo-posts-api.herokuapp.com/api/posts')
      // .then(response => response.json())
      // .then(posts => {
      //   console.log(posts)
  
      //   // document.querySelector('.post-created-at').textContent = post.created_at;
      //   // document.querySelector('.post-author').textContent = post.author;
      //   // document.querySelector('.post-description').textContent = post.description;
        
      // })
    }
   
    // {inputJob: "ruby", inputLocation: "us"}

    //https://jobs.github.com/positions.json?utf8=%E2%9C%93&description=ruby&location=us&full_time=on

    // https://jobs.github.com/positions?utf8=%E2%9C%93&description=ruby&location=us&full_time=on
    
    // 
  })
})