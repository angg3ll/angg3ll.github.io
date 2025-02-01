const alternatives = [
    {text:"", images:"images/flower_01.gif"},
    {text:"PleASeEEeee", images:"images/please_02.gif"},
    {text:"Think again.", images:"images/knife_03.gif"},
    {text:"Click Yes", images:"images/nod_04.gif"},
    {text:"I'm on my knees, please say yes", images:"images/begging_05.gif"},
  ]
  const ohyes = {text:"Yay!! Thank you for saying YES <3", images:"images/kisses_yes.webp"}
  const flower = document.querySelector('.flower')
  const text = document.querySelector('.text')
  const buttons = document.querySelectorAll('.button')
  const errorButton = document.querySelector('.button__error')
  const titleText = "Will you be my Valentine?"
  const titleElement = document.querySelector('.title')

  let count = 0;

  // Animates title text
  function animateTitle(text, element, delay = 500) {
    const words = text.split(' ');
    element.innerHTML = '';
    words.forEach((word, index) => {
      setTimeout(() => {
        element.innerHTML += word + ' ';
      }, index * delay);
    });
  }
  animateTitle(titleText, titleElement);
  
  // Updates the display with the next image and text
  function updateDisplay(item){
    flower.src = item.images
    text.innerHTML = item.text
  }

  // Handles error button reset
  errorButton.addEventListener('click', ()=>{
    count = 0;
    updateDisplay(alternatives[count])
    buttons.forEach(btn => btn.style.display = 'inline-block')
    errorButton.style.display = 'none'

    // Reset position of no button
    noButton.style.position = 'relative'; //reset position
    noButton.style.transform = 'scale(1)'; //reset scale
    noButton.style.top = ''; //reset top
    noButton.style.left = ''; //reset left
    
  })

  // Button click for yes and no
  buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.textContent == "Yes"){
            updateDisplay(ohyes)
            buttons.forEach(btn => btn.style.display = 'none')
        }
        if(button.textContent == 'No'){
            count++
            if(count < alternatives.length){
                updateDisplay(alternatives[count])
                // Move the "No" button to a random position with a smooth transition
                button.style.position = 'absolute'
                button.style.transition = 'top 0.5s, left 0.5s, transform 0.5s'
                button.style.top = `${Math.random() * window.innerHeight}px`
                button.style.left = `${Math.random() * window.innerWidth}px`
                // Make the "No" button smaller
                const currentScale = parseFloat(button.style.transform.replace('scale(', '').replace(')', '')) || 1
                button.style.transform = `scale(${currentScale * 0.9})`
            }else{
                buttons.forEach(btn => btn.style.display = 'none')
                errorButton.style.display = 'inline-block'
            }
        }
    })
  })
  
  // Align the "No" button with the "Yes" button initially
  const noButton = document.querySelector('.button__negative');
  const yesButton = document.querySelector('.button');