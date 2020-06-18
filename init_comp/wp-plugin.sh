#!/bin/bash

# WP プラグイン (zip) ダウンロード
# ここにインストールしたいプラグインを記述する
plugins=("contact-form-7.5.1.7" "all-in-one-wp-migration")

for item in "${plugins[@]}"; do
  wget "https://downloads.wordpress.org/plugin/${item}.zip"
done

# Zip ファイルを解凍してインストール
unzip './*.zip' -d /usr/src/wordpress/wp-content/plugins

# 不要になった一時ファイルを削除
apt-get clean
rm -rf /tmp/*
