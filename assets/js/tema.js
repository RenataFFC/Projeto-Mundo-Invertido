window.addEventListener('click', function(){
  const audio = document.getElementById('music');
   audio.onplay();
   audio.volume = 0.2;
})

function switchTheme(){
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');       
        }