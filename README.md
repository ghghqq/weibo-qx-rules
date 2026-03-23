# weibo-qx-rules

Weibo startup ad cleanup rules and scripts for Quantumult X.

## Files

- `weibo_ad_cleanup.js`: response rewrite script
- `weibo_qx_importable.snippet`: generic importable snippet
- `weibo_qx_gist_template.snippet`: GitHub Gist raw URL version
- `weibo_qx_repo_raw_template.snippet`: GitHub repository raw URL version
- `weibo_qx_final.snippet`: ready-to-import Quantumult X snippet
- `weibo_qx_rewrite_remote.snippet`: ready-to-import Quantumult X rewrite_remote snippet
- `weibo_qx_rewrite_sample.conf`: local test sample that points to a local file path

## Recommended publish flow

1. Push this repository to `ghghqq/weibo-qx-rules`
2. Keep `weibo_ad_cleanup.js` at the repository root
3. Use `weibo_qx_repo_raw_template.snippet` as the Quantumult X remote resource

Ready-to-use Quantumult X snippet:

```text
https://raw.githubusercontent.com/ghghqq/weibo-qx-rules/refs/heads/main/weibo_qx_final.snippet
```

Ready-to-use Quantumult X rewrite remote snippet:

```text
https://raw.githubusercontent.com/ghghqq/weibo-qx-rules/refs/heads/main/weibo_qx_rewrite_remote.snippet
```

Default raw JS URL:

```text
https://raw.githubusercontent.com/ghghqq/weibo-qx-rules/refs/heads/main/weibo_ad_cleanup.js
```
