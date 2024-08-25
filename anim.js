// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "في ذلك الوقت", time: 13 },
  { text: "همس الطيور", time: 16 },
  { text: "وحيد قبل أن تبكي الشمس", time: 20 },
  { text: "سقط من السماء", time: 24 },
  { text: "مثل قطرات الماء", time: 28 },
  { text: "أين أنا الآن؟ لا أعرف لماذا", time: 32 },
  { text: "فراشات جميلة في يدي", time: 36 },
  { text: "الكثير من الضوء للشفق", time: 40 },
  { text: "في مزاج لحب الزهور", time: 44 },
  { text: "تلك الرؤية", time: 48 },
  { text: "قوية جدا، أذهلتني", time: 52 },
  { text: "الصمت دعني أرى ما كان عليه", time: 56 },
  { text: "أريد فقط أن أعيش في الغيوم", time: 60 },
  { text: "أين أنا الآن؟ لا أعرف لماذا", time: 64 },
  { text: "فراشات جميلة في يدي", time: 68 },
  { text: "الكثير من الضوء للشفق", time: 72 },
  { text: "في مزاج لحب الزهور", time: 76 },
  { text: "في ذلك الوقت", time: 104 },
  { text: "همس الطيور", time: 108 },
  { text: "وحيد قبل أن تبكي الشمس", time: 112 },
  { text: "سقط من السماء", time: 116 },
  { text: "مثل قطرات الماء", time: 120 },
  { text: "أين أنا الآن؟ لا أعرف لماذا", time: 124 },
  { text: "فراشات جميلة في يدي", time: 128 },
  { text: "الكثير من الضوء للشفق", time: 132 },
  { text: "في مزاج لحب الزهور", time: 136 },
  { text: "حب.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => time >= line.time - 0.5 && time < line.time + 3.5
  );

  if (currentLine) {
    var opacity = Math.min(1, (time - (currentLine.time - 0.5)) / 0.5);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

audio.addEventListener('timeupdate', updateLyrics);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 140000); // Oculta el título después de 140 segundos
