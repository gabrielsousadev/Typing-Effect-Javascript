const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["programmer", "full stack", "software engineer", "brother"]; //Words list
const typingDelay = 200, erasingDelay = 100, newTextDelay = 2000;
let textArrayIndex = 0, charIndex = 0;

function writeText()
{
    if (charIndex < textArray[textArrayIndex].length) 
    {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(writeText, typingDelay);
    }

    else
    {
        cursorSpan.classList.remove("typing");
        setTimeout(deleteText, newTextDelay);
    }
}

function deleteText() 
{
    if (charIndex > 0) 
    {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, erasingDelay);
    }

    else
    {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) 
        {
            textArrayIndex = 0;
        }

        setTimeout(writeText, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function name() 
{
    if (textArray.length) setTimeout(writeText, newTextDelay + 250); 
});