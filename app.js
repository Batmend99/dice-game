// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Тооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн тоог энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

/* <div class="player-score" id="score-0">43</div> */
// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Hurry!<em>";

//Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 доторх санамсаргүй нэг тоог гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ
  if (diceNumber !== 1) {
    // 1-ээс ялгаатай тоо буулаа.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг солино.
    // Тухайн тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
  
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = "0";
    // Тоглогчдийн ээлжийг солино.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // Шоог түр алга болгох
    diceDom.style.display = "none";
  }
});

// HOLD товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Уг тоглогчийн цуглуулсан ээлжийн оноог глобал оноон дээр нэмнэ.
  // if (activePlayer === 0) {
  //   scores[0] = scores[0] + roundScore;
  // } else {
  //   scores[1] = scores[1] + roundScore;
  // }
  scores[activePlayer] = scores[activePlayer] + roundScore;

   // Дэлгэц дээрх оноог нь өөрчилнө.
   document.getElementById("score-" + activePlayer).textContent =
   scores[activePlayer];

  // Уг тоглогчийн хожсон эсэхийг (оноо 100 хүрсэн эсэхийг) шалгах
  if (scores[activePlayer] >= 100){
    document.getElementById("name-" + activePlayer).textContent = "WINNER !!!";
    document.querySelector("player-" + activePlayer + "-panel").classList.add("winners")
  } else{
    // Тоглогчийн ээлжийг солино.
  function switchToNextPlayer();
  }
});
// Энэ функц нь тоглох ээлжийг дараагийн тоглогч руу шилжүүлнэ.
function switchToNextPlayer(){
  // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
 roundScore = 0;
 document.getElementById("current-" + activePlayer).textContent = '0'
 // Тоглогчдийн ээлжийг солино.
 activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

 // Улаан цэгийг шилжүүлэх
 document.querySelector(".player-0-panel").classList.toggle("active");
 document.querySelector(".player-1-panel").classList.toggle("active");
 // Шоог түр алга болгох
 diceDom.style.display = "none";
}

// Тоглоомыг шинээр эхлүүлэх товчны эвент листенер
document.querySelector(".btn-new").addEventListener("click", function(){
  alert("Working...");
})