const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const shareBtn = document.getElementById("shareBtn");
const shareModal = document.getElementById("shareModal");
const closeShare = document.getElementById("closeShare");
const copyLinkBtn = document.getElementById("copyLinkBtn");
const shareLinkBtn = document.getElementById("shareLinkBtn");

/* LINK AUTOMÁTICO DO CARTÃO */
const CARD_URL = "https://recanto-so-lazer.vercel.app";

/* QR CODE */
new QRCode(document.getElementById("qrcode"), {
  text: CARD_URL,
  width: 160,
  height: 160,
  colorDark: "#0c1f14",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

/* TOGGLE TEMA */
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
});

/* MODAL */
shareBtn.addEventListener("click", () => {
  shareModal.style.display = "flex";
});

closeShare.addEventListener("click", () => {
  shareModal.style.display = "none";
});

/* COPIAR LINK */
copyLinkBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(CARD_URL);
  copyLinkBtn.innerText = "✅ Link copiado!";
  setTimeout(() => {
    copyLinkBtn.innerText = "📋 Copiar link";
  }, 2000);
});

/* COMPARTILHAMENTO NATIVO */
shareLinkBtn.addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: "Recanto Só Lazer",
      text: "Confira o cartão digital do Recanto Só Lazer 🌞🎉",
      url: CARD_URL,
    });
  } else {
    alert("Compartilhamento não suportado neste dispositivo.");
  }
});
