# KV Update API

API simples feita com FastAPI para integração com plugin do Figma via n8n.

## Endpoints

- `POST /api/kv-update`: atualiza os dados enviados
- `GET /api/kv-update`: retorna os dados atuais

## Execução local

```bash
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

## Deploy recomendado

1. Faça o upload para um repositório GitHub
2. Vá até [Railway](https://railway.app)
3. Clique em **New Project > Deploy from GitHub Repo**
4. Railway detectará automaticamente a estrutura FastAPI

Acesse o backend público e atualize o plugin do Figma com a URL correta.
