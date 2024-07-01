function submitMessage() {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            new Notification("Example notification", {
                body: "ahbuh",
            })
        }
    })
} 