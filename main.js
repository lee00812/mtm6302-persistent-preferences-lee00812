//database
const items = [ 
    { name: 'Freezer' },
    { name: 'Bedside Table' },
    { name: 'Accent Chair' },
    { name: 'Showerhead' },
    { name: 'Coffee Maker' },
]

//to display items from the database
const wishlist = document.getElementById('list')
const htmlTemplate = []

for(const item of items) {
	htmlTemplate.push(
		`<div class="item">
			<p>${item.name}</p>
        </div>`)
}

wishlist.innerHTML = htmlTemplate.join('')

//set themes using buttons
const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    
    body.classList.remove('pastel-theme', 'dark-theme', 'light-theme', 'default-theme');
    body.classList.add(button.value);
    
    // set Item
    const theme = button.value    
    localStorage.setItem('theme', theme);

  });
});

// get Item
const newTheme = localStorage.getItem('theme');
if (newTheme) {
    body.classList.add(newTheme);
}

// function colorMode() {
//     body.classList.add(button.value);
// }
// colorMode('theme')


//set theme using dropdown menu
const themes = document.getElementById('themes')

themes.addEventListener('change', function () {
    
    body.classList.remove('pastel-theme', 'dark-theme', 'light-theme', 'default-theme')
    body.classList.add(themes.value);

    // Set Item
    const theme = themes.value
    localStorage.setItem("theme", theme);
  });

//   // // get Item
// const newTheme = localStorage.getItem('theme');
// if (newTheme) {
//     body.classList.add(newTheme);
// }

//set line styles by dropdown menu
const styles = document.getElementById('lines')
const list = document.getElementById('list')
  
  styles.addEventListener('change', function () {
      
      list.classList.remove('dotted-line', 'dashed-line', 'double-line', 'solid-line')
      list.classList.add(styles.value);

      // Set Item
      const savedStyle = styles.value
      localStorage.setItem("style", savedStyle);
    });

    // get Item
    const newStyle = localStorage.getItem('style');
    if (newStyle) {
        list.classList.add(newStyle);
    }


  

// some trials
// function setTheme(newTheme) {
    
//     if ( newTheme == 'dark-theme') {

//         body.classList.add('dark-theme');
//         body.classList.remove('light-theme', 'pastel-theme');

//     } else if ( newTheme == 'light-theme' ) {

//         body.classList.add('light-theme');
//         body.classList.remove('dark-theme', 'pastel-theme');

//     } else if ( newTheme == 'pastel-theme' ) {

//         body.classList.add('pastel-theme');
//         body.classList.remove('dark-theme', 'light-theme');
//     }
// }

//set line styles
// const lines = document.querySelector('section');
// function setLineStyle(newLineStyle) {
    
//     if ( newLineStyle == 'solid-line') {

//         lines.classList.add('solid-line');
//         lines.classList.remove('dotted-line', 'dashed-line', 'double-line');

//     } else if ( newLineStyle == 'dotted-line' ) {

//         lines.classList.add('dotted-line');
//         lines.classList.remove('solid-line', 'dashed-line', 'double-line');

//     } else if ( newLineStyle == 'dashed-line' ) {

//         lines.classList.add('dashed-line');
//         lines.classList.remove('solid-line', 'dotted-line', 'double-line');
        
//     } else if ( newLineStyle == 'double-line' ) {

//         lines.classList.add('double-line');
//         lines.classList.remove('solid-line', 'dotted-line', 'dashed-line');
        
//     }
// }

  