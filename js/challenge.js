
//As a user, I should see the timer increment every second once the page has loaded.
document.addEventListener('DOMContentLoaded', function(){
  let interval = setInterval(incrementCounter, 1000);
  document.getElementById("plus").onclick = incrementCounter
  document.getElementById("minus").onclick = decrementCounter
  document.getElementById("heart").onclick = heartCount
  document.getElementById("pause").onclick = () => pauseCounter(interval)
  document.getElementById("comment-form").onsubmit = addComment
}, false);

likes = new Object


function incrementCounter() {
  counter = document.getElementById("counter")
  count = parseInt(counter.innerText, 10)
  counter.innerText = ++count
}

function decrementCounter() {
  counter = document.getElementById("counter")
  count = parseInt(counter.innerText, 10)
  counter.innerText = --count
}

function heartCount() {
  counter = document.getElementById("counter")
  count = parseInt(counter.innerText, 10)
  likes[count] = likes[count] ? ++likes[count] : 1
  updateLikes(likes, count)
}

function updateLikes(likes, changedLike) {
  let like_li = ""

  if (like_li = document.getElementById(`${changedLike}-likes`)) {
    like_li.innerText = `${likes[changedLike]} likes for # ${changedLike} `
  }
  else {
    like_li = document.createElement("li")
    like_li.id = `${changedLike}-likes`
    like_li.innerText = `${likes[changedLike]} likes for # ${changedLike}`

    document.getElementsByClassName("likes")[0].appendChild(like_li)
  }
}

function pauseCounter(interval) {
  console.log(interval)
  if (interval) {
    clearInterval(interval)
    disableButtons()
    document.getElementById("pause").onclick = () => pauseCounter(false)
  }
  else {
    interval = setInterval(incrementCounter, 1000);
    enableButtons()
    document.getElementById("pause").onclick = () => pauseCounter(interval)
  }
}

function disableButtons() {
  document.getElementById("plus").disabled = true
  document.getElementById("minus").disabled = true
  document.getElementById("heart").disabled = true
}

function enableButtons() {
  document.getElementById("plus").disabled = false
  document.getElementById("minus").disabled = false
  document.getElementById("heart").disabled = false
}

function addComment(e) {
  e.preventDefault(true)
  commentInput = document.getElementById("comment-input")
  comment = commentInput.value
  commentInput.value = ""

  commentDiv = document.getElementById("list")
  newCommentP = document.createElement("p")
  newCommentP.innerText = comment
  commentDiv.appendChild(newCommentP)

}