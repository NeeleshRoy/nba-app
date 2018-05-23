#!/bin/sh
setup_git() {
  git config --global user.email $GIT_EMAIL
  git config --global user.name $GIT_PASSWORD
}

push() {
  git checkout -b develop
  git add .
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
  git push --quiet origin develop
}

setup_git
push