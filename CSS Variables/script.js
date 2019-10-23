//array has lots of methods, where as a nodelist only has a couple. Converting a nodelist to an array is a thing, but using
//the 'for each' method we can loop through a nodelist.
const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; //color doesn't have a suffix, avoiding error
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix );
}
//for each input detected, call the function handleUpdate
inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));