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
  // Clear the whole ad payload instead of only emptying nested lists.
  body.data = {};
  body.last_ads = {};
  body.req_exp_list = [];
  body.seq = body.seq || "0";
  body.ret = 0;
  body.rpt = 0;
  body.msg = "";
  body.reqinterval = 86400;

  $done({ body: JSON.stringify(body) });
}

$done({});
