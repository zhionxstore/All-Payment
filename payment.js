function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Berhasil menyalin: ' + text);
  });
}