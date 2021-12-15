main: serve

serve:
	@echo "[INFO] Serving at Port: 4000"
	@start "http://localhost:4000/"
	@bundler exec jekyll serve

install:
	@echo "[INFO] Installing Dependencies"
	@bundler install

build:
	@echo "[INFO] Building Site"
	@bundler exec jekyll build
