"use strict";

var total=0;
document.querySelector(".count").
textContent=total;

function check(sum)
{
    if(sum<=0)
    {
        document.querySelector(".count").
        textContent="0";
    }
    else
    {
        document.querySelector(".count").
        textContent=sum;
    } 
}

document.querySelector(".add").
addEventListener("click",function()
{
total++;
check(total);
});

document.querySelector(".sub").
addEventListener("click",function()
{
total--;
check(total);

});

document.querySelector(".plus-hun").
addEventListener("click",function()
{
total+=100;
check(total);
});

document.querySelector(".minus-hun").
addEventListener("click",function()
{
total-=100;
check(total);
});

document.querySelector(".reset").
addEventListener("click",function()
{
total=0;
document.querySelector(".count").textContent=total;
});