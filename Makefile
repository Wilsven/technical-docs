.PHONY: install-pip install-poetry lint

install-pip:
	pip install -r requirements.txt

install-poetry:
	poetry install

lint:
	pre-commit run --all-files

all: install-pip install-poetry lint
