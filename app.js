// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Тооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн тоог энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6);

/* <div class="player-score" id="score-0">43</div> */
// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Hurry!<em>";

//Програм эхлэхэд бэлтгэе
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
console.log("Шоо: " + dice) + 1;
