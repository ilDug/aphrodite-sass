# Create Documentation folder and project

Using **mkdocs**.

```bash
docker run --rm -it -v ${PWD}/docs:/docs squidfunk/mkdocs-material new .
```

# Dev and Serve

```bash
docker run --rm -it -p 8000:8000 -v ${PWD}/docs:/docs squidfunk/mkdocs-material
```

# Build 

```bash
docker run --rm -it -v ${PWD}/docs:/docs squidfunk/mkdocs-material build
```