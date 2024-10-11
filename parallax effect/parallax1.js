let treeLeft = document.getElementsByClassName("foreground");
let treeRight = document.getElementsByClassName("foreground1");

let wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('scroll', () => {
    value=wrapper.scrollTop;
    treeLeft[0].style.left = value+300+'px';
    treeRight[0].style.right = +value+300+ 'px';
    //console.log(value);
});
