function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function openSettings() {
    document.getElementById("settings-modal").style.display = "block";
}

function closeSettings() {
    document.getElementById("settings-modal").style.display = "none";
}

function saveSettings() {
    var url = document.getElementById("url").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 현재 활성화된 탭에 URL 설정
    var activeTab = document.querySelector(".tab-content[style*='block']");
    if (activeTab) {
        activeTab.src = url;
        // 여기에서 추가적으로 ID와 비밀번호를 저장하는 로직을 구현할 수 있습니다.
        console.log("URL:", url);
        console.log("Username:", username);
        console.log("Password:", password);
    }

    closeSettings();
}

// 기본적으로 첫 번째 탭을 열기
document.addEventListener("DOMContentLoaded", function() {
    openTab('tab1');
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
