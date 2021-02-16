function boxClicked(n) {
  const content = document.querySelector(`.content${n}`);
  if (content.style.display === 'none') content.style.display = 'block';
  else content.style.display = 'none';
}
