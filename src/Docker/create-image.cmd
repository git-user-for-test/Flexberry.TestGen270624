docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testgen270624/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testgen270624/app ../..
