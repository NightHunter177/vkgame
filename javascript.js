onkeydown = e =>  e.key == ' ' ? clicksCountSpan.innerText++ : 0
el.addEventListener('touchstart', () => { clicksCountSpan.innerText++ });