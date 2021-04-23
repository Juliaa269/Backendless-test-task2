let bgBody = document.querySelector('body');
        bgHeader = document.querySelector('.header');
        bgFooter = document.querySelector('.footer');
        colorBody = document.querySelector('body');
        footerItem1Color = document.querySelector('.footer__contacts-item1');
        footerItem2Color = document.querySelector('.footer__contacts-item2');
        facebookIcon = document.querySelector('.fa-facebook');
        telegramIcon = document.querySelector('.fa-telegram');
        instagramIcon = document.querySelector('.fa-instagram');
        twitterIcon = document.querySelector('.fa-twitter');
        youtubeIcon = document.querySelector('.fa-youtube');
        vkIcon = document.querySelector('.fa-vk');
        envelopeIcon = document.querySelector('.fa-envelope');

function changeCssLight() {
    bgBody.style.background = "#E6EFF1";
    bgHeader.style.background = "#7AA6B0";
    bgFooter.style.background = "#7AA6B0";
    colorBody.style.color = "#000";
    footerItem1Color.style.color = "#000";
    footerItem2Color.style.color = "#000";
    facebookIcon.style.color = '#7AA6B0';
    telegramIcon.style.background = '#7AA6B0';
    twitterIcon.style.color = '#7AA6B0';
};

function changeCssDark() {
    bgBody.style.background = "#434647";
    bgHeader.style.background = "#000";
    bgFooter.style.background = "#000";
    colorBody.style.color = "#fff";
    footerItem1Color.style.color = "#fff";
    footerItem2Color.style.color = "#fff";
    facebookIcon.style.color = '#000';
    telegramIcon.style.background = '#000';
    twitterIcon.style.color = '#000';
}

function changeCssBackendless() {
    bgBody.style.background = "#BCC0C1";
    bgHeader.style.background = "#797B7C";
    bgFooter.style.background = "#797B7C";
    colorBody.style.color = "#fff";
    footerItem1Color.style.color = "#fff";
    footerItem2Color.style.color = "#fff";
    facebookIcon.style.color = '#797B7C';
    telegramIcon.style.background = '#797B7C';
    twitterIcon.style.color = '#797B7C';
}

$('#select').change(function() {
    if( this.value === 'light') {
        changeCssLight();
    } else if ( this.value === 'dark') {
        changeCssDark();
    } else if (this.value === 'backendless') {
        changeCssBackendless();
    }
});