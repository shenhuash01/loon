const url = "https://fwdt.shengongshe.org/sgsWchartApi/api/My/myIntegral";

if ($request && $request.url.includes(url)) {
  const token = $request.headers['token']; 
  if (token) {
    $persistentStore.write(token, "sgs"); // Store the token in Loon's persistent storage
    $notification.post("Token 获取成功", "Token 已成功保存", token); // Notify the user that the token was successfully captured
  } else {
    $notification.post("Token 获取失败", "请求头中未找到 token", JSON.stringify($request.headers));
  }
  $done({});
} else {
  $done({});
}