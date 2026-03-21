# GitHub Publish Notes

## Files

- `weibo_ad_cleanup.js`
- `weibo_qx_gist_template.snippet`
- `weibo_qx_repo_raw_template.snippet`

## Gist raw format

Use this pattern after you publish `weibo_ad_cleanup.js` to a Gist:

```text
https://gist.githubusercontent.com/ghghqq/<gist-id>/raw/weibo_ad_cleanup.js
```

Then replace `GIST_RAW_URL` in `weibo_qx_gist_template.snippet`.

## Repository raw format

Use this pattern after you push `weibo_ad_cleanup.js` to a repository:

```text
https://raw.githubusercontent.com/ghghqq/weibo-qx-rules/refs/heads/main/weibo_ad_cleanup.js
```

If your default branch is not `main`, replace it with the real branch name.

Suggested repository name: `weibo-qx-rules`

Then replace `REPO_RAW_URL` in `weibo_qx_repo_raw_template.snippet`.
