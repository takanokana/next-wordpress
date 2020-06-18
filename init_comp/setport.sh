# #!/bin/bash

# # docker-composeのportを書き換え
# sed -E -i '' "s/[0-9]+:80/$1:80/g" docker-compose.yml

# #　dbの情報書き換え
# sed -E -i '' "s|http://localhost:?[0-9]*|http://localhost:$1|g" db/mysql.dump.sql
