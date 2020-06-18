FROM wordpress:latest

# 必要なツール郡をインストール
RUN apt-get update
RUN apt-get -y install wget unzip bash


# 日本語ファイルをダウンロード
ENV WORDPRESS_TAR_FILE latest-ja.tar.gz
RUN rm -rf /usr/src/wordpress \
&& curl -O https://ja.wordpress.org/${WORDPRESS_TAR_FILE}\
&& tar -xzf ${WORDPRESS_TAR_FILE} -C /usr/src/ \
&& rm ${WORDPRESS_TAR_FILE}

# WP プラグイン (zip) ダウンロード
WORKDIR /tmp/wp-plugins
ADD ./wp-plugin.sh ./wp-plugin.sh
RUN bash ./wp-plugin.sh

WORKDIR /var/www/html
