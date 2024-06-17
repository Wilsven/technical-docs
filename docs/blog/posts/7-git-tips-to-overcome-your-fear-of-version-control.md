---
title: 7 Git Tips To Overcome Your Fear of Version Control
date: 2024-06-14
authors: [wilsven]
slug: 7-git-tips-to-overcome-your-fear-of-version-control
description: >
categories:
  - Engineering
  - Guides
---

# 7 Git Tips To Overcome Your Fear of Version Control

Working with a team of skilled developers and afraid you'll screw the codebase up? Are you worried you're going to overwrite other developers' commits? Or get a complex merge conflict that you can't resolve?

Well, this article is for you. In this article, we will cover 7 Git tips to help you feel more confident with Git, GitHub, and Version Control in general. 

<!-- more -->

## Tip 1: Merge `master` (or `main`) before pushing code

Merge `master` (or `main`) before pushing code. This is simply good practice especially if you're working in a team. In this way, you can ensure that you have the latest changes in `master` or `main` before pushing to GitHub and this will help you avoid merge conflicts. 

If you create a branch and you're working on stuff for a week or two, there are going to be people committing their branches and those branches are going to be merged into `master` or `main`. 

By the time you're done with your feature and you are ready to merge your changes, there is a very high chance the `master` or `main` branch is going to be completely different — the file you worked on may have been changed since you lasy checked it out. When you got to merge your changes in, you're sure to have merge conflicts (or possibly overwrite somebody's changes). 

Therefore, whenever you check out a branch and you're done working on it, it is best practice to merge in the `master` or `main` branch before committing your code. Let's have a look at an example:

!!! example

    Imagine you have a branch checked out called `feature` and you've been working on a feature on this branch for a couple weeks. You don't want to just push this branch up to GitHub. You want to ensure you have all the changes that happened in the `master` or `main` branch, also included in this `feature` branch — so you're up to date with the latest changes since you last checked out.

    ```bash
    git checkout main
    git pull origin main
    git checkout feature
    git merge main
    ```

    This allows you to resolve any potential merge conflicts locally before pushing.

## Tip 2: Learn how to undo a local commit

It will often be the case where you will forget to pull the latest changes from the remote repository. You will then make changes on your branch, commit those changes locally and proceed to push those changes to the remote repository. However, you will get an error saying that the codebase ahead of you is out of sync — you would need to pull the latest changes first before you can push your changes. More specifically, you will see the error like the one below:


!!! failure

    ```bash 
    To <YOUR_GITHUB_REPO_URL>
     ! [rejected]           master → master (fetch first)
    error: failed to push some refs to <YOUR_GITHUB_REPO_URL>
    hint: Updates were rejected because the remote coltains work that you do
    hint: not have locally. This is usually caused by another repository pushing
    hint: to the same ref. You may want to first integrate the remote changes
    hint: (e.g., 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push -—help' for details.
    ```

You would think that you can resolve this error by simply doing a `git pull`. However, you can't do so because you have already made a commit locally. This happens more frequently than you might think and a helpful command to remember is `git reset --soft HEAD~1`. Let's break down this command and understand what it is doing.

- `HEAD` refers to the branch (or commit) that is currently checked out. 
- The `~1` means you're going to move the `HEAD` one commit backward and discard everything forward. This seems like an issue discarding what you've committed locally before. 
- That is what the `--soft` flag is for. It means it is not going to undo your previous changes — it is going to undo the changes **AND** keep your changes. If you set the `--hard` flag, it is going to undo your changes.

## Tip 3: There's no fear in branches

There's no fear in branches. Once you have created a branch, you're off the main codebase and have your own playground to work in. So when you start making a bunch of changes and you don't have to get worried about it. The branch is a "safe place" for you to work on any changes and when you're done, remember to merge your changes back to `master` or `main`.

## Tip 4: Resolve merge conflicts in VS Code 

As you're getting started out with Git, it's always a good idea to resolve merge conflicts in VS Code. It is good to avoid using the terminal as it is more complicated than it needs to be. VS Code makes it more understandable, gives you options to click on and sets up your commit for you. 

??? example

    Imagine working on a project and you have the following file that resides on the `master` or `main` branch: 

    ```txt
    This is a test page. TODO: Add some content.
    ```

    You had created a branch and made some changes to this. You have not pulled the latest changes but you are going to merge your changes into the `master` or `main` branch. Your changes are as follows:

    ```txt
    This is some content added by me on another branch.
    ```

    When you run `git merge feature-branch`, you're going to encounter a merge conflict. VS Code will prompt you to resolve the conflict and you will see the following:

    ```txt
    <<<<<<< HEAD (Current Change)
    This is a test page. TODO: Add some content.
    =======
    This is some content added by me on another branch.
    >>>>>>> feature-branch (Incoming Change)
    ```

With merge conflicts, you basically have three options:

1. Accept the current change
2. Accept the incoming change
3. Accept both changes

Finally, you have to commit after resolving the merge conflict(s). 

## Tip 5: Use VS Code for Git Commands

While it is quicker to use the terminal for Git commands, it is much more convenient to use VS Code. This is especially so if you're just starting out with Git. There are many extensions available on VS Code like Git Graph or Git History that provides a nice visual representation of your Git history. While you could do the same for the command `git log`, it is much user-friendly to use VS Code.

## Tip 6: Forget about Git rebase

When you're starting out, forget about advanced Git concepts. Avoid going into a project with many other developers, trying to do big complicated and intricate commands like a `git rebase`. Simply sticking to the following, you will be able to contribute and collaborate with others working on a main codebase without issues:

- Pulling branches
- Pushing branches
- Fixing branches
- Merging branches
- Creating pull requests

## Tip 7: Git is designed so you don't screw up