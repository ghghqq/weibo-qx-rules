/*
 * Tencent ad cleanup for QuanX/Surge/Loon-style response rewrites.
 *
 * Targets confirmed from HAR:
 * - https://us.l.qq.com/exapp
 * - https://sdkreport.e.qq.com/link_event
 */

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    return null;
  }
}

const url = $request.url || "";
const originalBody = $response.body || "";
const body = safeParse(originalBody);

if (!body) {
  $done({});
}

if (/^https?:\/\/us\.l\.qq\.com\/exapp/.test(url)) {
  if (body.data && typeof body.data === "object") {
    Object.keys(body.data).forEach((key) => {
      const item = body.data[key];
      if (item && typeof item === "object") {
        if (Array.isArray(item.list)) {
          item.list = [];
        }
        if ("ret" in item) {
          item.ret = 0;
        }
      }
    });
  } else {
    body.data = {};
  }

  if (body.last_ads && typeof body.last_ads === "object") {
    body.last_ads = {};
  }

  // Ask the app to reduce request frequency for this ad slot.
  if ("reqinterval" in body) {
    body.reqinterval = 86400;
  }

  $done({ body: JSON.stringify(body) });
}

$done({});
