最初立ち上げる時はdocker-compose.ymlのnginxの

```
volumes:
  - "./config/conf.d:/etc/nginx/conf.d"
```
をコメントアウトして、コメント復帰させてからrestartした方がいいかも。
imageの中は調べていないが、後から/etc/nginx/conf.d作成してるっぽくてマウント失敗する。
