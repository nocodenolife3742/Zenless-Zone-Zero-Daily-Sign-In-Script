import requests
import json

url = "https://sg-act-nap-api.hoyolab.com/event/luna/zzz/os/sign?act_id=e202406031448091&lang=zh-tw"
cookie = "REPLACE_WITH_YOUR_COOKIE"
response = requests.post(url, headers={"Cookie": cookie})
print(json.loads(response.text)["message"])  # check success or not
