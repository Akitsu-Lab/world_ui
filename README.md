# world_ui

## 前準備

```sh
npm upgrade
```

## ビルド

```sh
npm run build
```

## 起動

```sh
npm start
```

## コンテナにビルド

```sh
docker build -t world_ui_node18.14-slim .
```

### image を起動

```shell
docker run --name world_ui --rm -d -p 3000:3000 world_ui_node18.14-slim
```

docker run --name <コンテナ名> --rm -d -p <ホスト側ポート>:<コンテナ側ポート> <イメージ名>

### コンテナに入る

```shell
docker exec -it world_ui bash
```

## コンテナを止める

```shell
docker stop world_ui
```

## 不要な docker image を削除

```shell
docker rmi $(docker images -f "dangling=true" -q)
```
