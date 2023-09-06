const countValue = document.querySelector('#counter')

const increment = () => {                               //arrow function 
    // get the value from UI
    let value = parseInt(countValue.innerHTML)
    // update the value
    value = value + 1
    // set the value back onto UI
    countValue.innerHTML = value
};

function decrement(){                                   // regular function
    // get the value from UI
    let value = parseInt(countValue.innerHTML)
    // update the value
    value = value - 1
    // set the value back onto UI
    countValue.innerHTML = value
};