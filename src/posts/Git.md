---
layout: blog
title: 'TIL - Git'
date: 2019-01-29T00:00:00.000Z
thumbnail: https://cdn-images-1.medium.com/max/2000/1*4W4fdnO680ysRhFc9ppc8w.jpeg
rating: '5'
---

# Git Note

---

## Having a folder reference to different branch so that you can easy access

### Usecase: Github Page deployment

* Constrain: Deployment has to be in master branch

* Solution:

  * `$ echo "dist/" >> .gitignore`
  * `$ git worktree add dist master`
  * Set default branch to `development`
  * When you develop in `development` branch
    * Build into `dist`
    * Deploy inside `dist` to `master` branch

Reference [Lin](khttps://gist.github.com/cobyism/4730490#gistcomment-2375522)

---