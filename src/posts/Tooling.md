---
layout: blog
title: '[TIL] Tooling'
date: 2019-01-29T00:00:00.000Z
thumbnail: https://www.elegantthemes.com/blog/wp-content/uploads/2015/04/web-development-tools.jpg
rating: '5'
---
# Tooling Note
---

## Open file using vscode by `code file.name`

1. Launch VS code
2. Open the Command Palette (F1)
3. Type `shell command`
4. Select `Shell Command: Install 'code' command in PATH command`

**NOTE**: Make sure you drag Visual Studio Code app into the Applications folder. Otherwise, you'll have to go through this process again after reboot

---

## alias config example

In `.env` file add

`alias test="jest && yarn run format`

then `source .env`

next time just type `test` in the folder

---