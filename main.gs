function main() {
    const cookie = "REPLACE WITH YOUR COOKIE";
    const url = "https://sg-act-nap-api.hoyolab.com/event/luna/zzz/os/sign?act_id=e202406031448091&lang=zh-tw";
    const options = {method: "POST", headers: {Cookie: cookie}};
    let response = UrlFetchApp.fetch(url, options);
    let text = JSON.parse(response.getContentText());
    Logger.log(text.message);
}
