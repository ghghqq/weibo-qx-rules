/*
 * Weibo ad cleanup script for Quantumult X / Surge / Loon style response rewrites.
 *
 * Targets identified from the provided HAR:
 * - bootpreload.uve.weibo.com/v2/ad/preload
 * - wbapp.uve.weibo.com/wbapplua/wbpullad.lua
 * - adstrategy.biz.weibo.com/v3/strategy/ad
 */

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
}

const url = $request.url;
const originalBody = $response.body || "";
const body = safeJsonParse(originalBody);
let outputBody = null;

if (!body) {
  $done({});
}

if (/bootpreload\.uve\.weibo\.com\/v2\/ad\/preload/.test(url)) {
  body.ads = [];
  body.foreground_req_preload = false;
  if (body.realtime_stop_conf && typeof body.realtime_stop_conf === "object") {
    body.realtime_stop_conf.request_interval = 86400;
  }
  outputBody = JSON.stringify(body);
}

if (/wbapp\.uve\.weibo\.com\/wbapplua\/wbpullad\.lua/.test(url)) {
  if (!body.cached_ad || typeof body.cached_ad !== "object") {
    body.cached_ad = {};
  }
  body.cached_ad.ads = [];
  body.cached_ad.delete_days = 0;
  outputBody = JSON.stringify(body);
}

if (/adstrategy\.biz\.weibo\.com\/v3\/strategy\/ad/.test(url)) {
  if (!body.data || typeof body.data !== "object") {
    body.data = {};
  }
  body.data.operation = [];
  body.data.adids_ctr = {};
  outputBody = JSON.stringify(body);
}

if (outputBody !== null) {
  $done({ body: outputBody });
} else {
  $done({});
}
