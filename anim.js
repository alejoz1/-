// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "في ذلك الوقت", time: 15 },
  { text: "همس الطيور", time: 18 },
  { text: "وحيد قبل أن تبكي الشمس", time: 27 },
  { text: "سقط من السماء", time: 32 },
  { text: "مثل قطرات الماء", time: 33 },
  { text: "أين أنا الآن؟ لا أعرف لماذا", time: 41 },
  { text: "فراشات جميلة في يدي", time: 47 },
  { text: "الكثير من الضوء للشفق", time: 54 },
  { text: "في مزاج لحب الزهور", time: 59 },
  { text: "تلك الرؤية", time: 67 },
  { text: "قوية جدا، أذهلتني", time: 72 },
  { text: "الصمت دعني أرى ما كان عليه", time: 78 },
  { text: "أريد فقط أن أعيش في الغيوم", time: 83 },
  { text: "أين أنا الآن؟ لا أعرف لماذا", time: 91 },
  { text: "فراشات جميلة في يدي", time: 97 },
  { text: "الكثير من الضوء للشفق", time: 104 },
  { text: "في مزاج لحب الزهور", time: 108 },
  { text: "في ذلك الوقت", time: 144 },
  { text: "همس الطيور", time: 148 },
  { text: "وحيد قبل أن تبكي الشمس", time: 153 },
  { text: "سقط من السماء", time: 158 },
  { text: "مثل قطرات الماء", time: 164 },
  { text: "أين أنا الآن؟ لا أعرف لماذا", time: 169 },
  { text: "فراشات جميلة في يدي", time: 176 },
  { text: "الكثير من الضوء للشفق", time: 183 },
  { text: "في مزاج لحب الزهور", time: 188 },
  { text: "حب.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
