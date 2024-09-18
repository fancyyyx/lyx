document.addEventListener('DOMContentLoaded', function() {  
    const thumbnails = document.querySelectorAll('.thumbnail');  
    const largeImage = document.getElementById('large-image');  
    let brightnessLevel = 100; // 当前大图片的亮度级别  
  
    // 初始化图片点击事件，用于切换大图片  
    function initImageSwitching() {  
        thumbnails.forEach(thumbnail => {  
            thumbnail.addEventListener('click', function() {  
                const imgSrc = this.getAttribute('data-large');  
                largeImage.src = imgSrc;  
                // 重置亮度为初始值，以防用户调整过亮度  
                largeImage.style.filter = `brightness(${brightnessLevel}%)`;  
            });  
        });  
    }  
  
    // 初始化亮度调整功能  
    function initBrightnessControls() {  
        document.getElementById('brightness-up').addEventListener('click', function() {  
            brightnessLevel = Math.min(200, brightnessLevel + 10); // 防止亮度超过200%  
            largeImage.style.filter = `brightness(${brightnessLevel}%)`;  
        });  
  
        document.getElementById('brightness-down').addEventListener('click', function() {  
            brightnessLevel = Math.max(0, brightnessLevel - 10); // 防止亮度低于0%  
            largeImage.style.filter = `brightness(${brightnessLevel}%)`;  
        });  
    }  
  
    // 初始化图片模糊和清晰度调整功能  
    function initImageEffects() {  
        document.getElementById('blur-image').addEventListener('click', function() {  
            largeImage.style.filter = `blur(5px)`;  
        });  
  
        document.getElementById('sharpen-image').addEventListener('click', function() {  
            largeImage.style.filter = `contrast(200%)`;  
        });  
    }  
  
    // 调用各个初始化函数  
    initImageSwitching();  
    initBrightnessControls();  
    initImageEffects();  
});
