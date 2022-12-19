Search.setIndex({"docnames": ["developer/explanations/decisions", "developer/explanations/decisions/0001-record-architecture-decisions", "developer/how-to/build-docs", "developer/how-to/contribute", "developer/how-to/lint", "developer/how-to/make-release", "developer/how-to/run-tests", "developer/how-to/static-analysis", "developer/how-to/update-tools", "developer/index", "developer/reference/standards", "developer/tutorials/dev-install", "index", "user/explanations/docs-structure", "user/how-to/run-container", "user/index", "user/tutorials/installation"], "filenames": ["developer/explanations/decisions.rst", "developer/explanations/decisions/0001-record-architecture-decisions.rst", "developer/how-to/build-docs.rst", "developer/how-to/contribute.rst", "developer/how-to/lint.rst", "developer/how-to/make-release.rst", "developer/how-to/run-tests.rst", "developer/how-to/static-analysis.rst", "developer/how-to/update-tools.rst", "developer/index.rst", "developer/reference/standards.rst", "developer/tutorials/dev-install.rst", "index.rst", "user/explanations/docs-structure.rst", "user/how-to/run-container.rst", "user/index.rst", "user/tutorials/installation.rst"], "titles": ["Architectural Decision Records", "1. Record architecture decisions", "Build the docs using sphinx", "Contributing to the project", "Run linting using pre-commit", "Make a release", "Run the tests using pytest", "Run static analysis using mypy", "Update the tools", "Developer Guide", "Standards", "Developer install", "dev-u22", "About the documentation", "Run in a container", "User Guide", "Installation"], "terms": {"we": [0, 1, 3], "major": 0, "adr": [0, 1], "describ": [0, 1], "michael": [0, 1], "nygard": [0, 1], "below": 0, "i": [0, 3, 4, 6, 7, 8, 9, 10, 13, 15, 16], "list": 0, "our": 0, "current": [0, 8, 16], "1": [0, 10], "date": 1, "2022": 1, "02": 1, "18": 1, "accept": 1, "need": [1, 13, 16], "made": 1, "thi": [1, 2, 4, 5, 8, 10, 11, 12, 13, 16], "project": [1, 2, 6, 8, 9, 12], "us": [1, 9, 10, 11, 12, 14, 16], "see": [1, 2, 5], "": 1, "articl": 1, "link": [1, 9, 15], "abov": [1, 4], "To": [1, 5, 8, 11, 14], "creat": [1, 5], "new": [1, 3, 5, 11, 15], "copi": 1, "past": 1, "from": [1, 2, 9, 10, 14, 15, 16], "exist": [1, 3, 16], "ones": 1, "you": [2, 3, 4, 5, 6, 7, 11, 16], "can": [2, 3, 4, 6, 7, 11, 16], "base": [2, 12], "directori": [2, 10], "run": [2, 3, 8, 9, 10, 11, 15], "tox": [2, 4, 6, 7, 11], "e": [2, 4, 6, 7, 11], "static": [2, 9, 10, 11], "which": [2, 8, 11], "includ": [2, 15], "api": [2, 10, 15], "pull": [2, 3, 8, 14], "docstr": [2, 10], "code": [2, 4, 12], "document": [2, 3, 9, 15], "standard": [2, 3, 9], "The": [2, 3, 4, 10, 12, 13, 16], "built": [2, 14], "html": 2, "open": [2, 3, 11], "local": [2, 11], "web": 2, "brows": 2, "firefox": 2, "index": 2, "also": [2, 3, 6, 9, 15, 16], "an": [2, 4, 8], "process": [2, 10], "watch": 2, "your": [2, 3], "chang": [2, 3, 4, 8, 12], "rebuild": 2, "whenev": 2, "reload": 2, "ani": [2, 3, 4, 8, 16], "browser": 2, "page": [2, 5, 10], "view": 2, "localhost": 2, "http": [2, 5, 8, 12, 16], "8000": 2, "If": [2, 3, 4, 16], "ar": [2, 3, 10, 13, 14], "make": [2, 3, 9], "sourc": [2, 7, 11, 12, 16], "too": 2, "tell": [2, 4], "src": 2, "most": [3, 13], "welcom": 3, "all": [3, 4], "request": [3, 8], "handl": [3, 4], "through": [3, 11], "github": [3, 5, 8, 11, 12, 14, 16], "pleas": [3, 5, 10], "check": [3, 4, 6, 7, 8, 10, 11], "befor": 3, "file": [3, 4, 7], "one": [3, 13], "have": [3, 4, 11], "great": 3, "idea": 3, "involv": 3, "big": 3, "ticket": 3, "want": 3, "sure": 3, "don": 3, "t": [3, 13], "spend": 3, "time": [3, 4], "someth": [3, 8], "might": 3, "fit": 3, "scope": 3, "offer": 3, "place": 3, "ask": 3, "question": 3, "share": 3, "end": 3, "obviou": 3, "when": [3, 11], "close": [3, 8], "rais": 3, "instead": [3, 14], "while": 3, "100": 3, "doe": 3, "librari": [3, 15], "bug": 3, "free": 3, "significantli": 3, "reduc": 3, "number": [3, 5, 14], "easili": 3, "caught": 3, "remain": 3, "same": [3, 5], "improv": [3, 13], "contain": [3, 10, 11, 12, 15, 16], "inform": [3, 13], "set": [3, 4, 10], "up": [3, 9], "environ": [3, 11, 12], "test": [3, 9], "what": 3, "should": [3, 16], "follow": [3, 5, 10, 11], "black": [4, 10], "flake8": [4, 10], "isort": [4, 10], "under": [4, 11], "command": 4, "Or": 4, "instal": [4, 9, 12, 14, 15], "hook": 4, "each": 4, "do": [4, 7], "git": [4, 8, 11, 16], "just": 4, "report": [4, 6], "reformat": 4, "repositori": [4, 10], "likewis": 4, "get": [4, 5, 9, 11, 14], "those": 4, "manual": 4, "json": 4, "formatt": 4, "well": [4, 12], "save": 4, "highlight": [4, 7], "editor": 4, "window": 4, "checklist": 5, "choos": [5, 11], "pep440": 5, "compliant": 5, "pep": 5, "python": [5, 8, 11, 12], "org": 5, "0440": 5, "go": 5, "draft": 5, "click": [5, 11], "tag": 5, "suppli": 5, "chose": 5, "gener": [5, 8, 12], "note": [5, 15], "review": 5, "edit": 5, "titl": [5, 10], "publish": 5, "push": 5, "main": [5, 14], "branch": 5, "ha": [5, 8, 16], "effect": 5, "except": 5, "option": 5, "done": [6, 7], "It": [6, 7, 16], "find": 6, "function": [6, 10, 13], "look": 6, "like": 6, "them": [6, 7], "error": 6, "coverag": 6, "commandlin": [6, 16], "cov": 6, "xml": 6, "type": [7, 10, 11, 16], "definit": 7, "without": 7, "potenti": 7, "issu": 7, "where": [7, 8], "match": 7, "modul": [8, 12], "merg": 8, "python3": [8, 11, 16], "pip": [8, 11, 16], "skeleton": 8, "structur": 8, "provid": [8, 12], "mean": 8, "keep": 8, "techniqu": 8, "sync": 8, "between": 8, "multipl": 8, "latest": 8, "version": [8, 14], "rebas": 8, "fals": 8, "com": [8, 11, 16], "diamondlightsourc": 8, "conflict": 8, "indic": 8, "area": 8, "setup": [8, 11], "more": [8, 13, 15], "detail": 8, "split": [9, 12, 15], "four": [9, 13, 15], "categori": [9, 15], "access": [9, 15], "side": [9, 15], "bar": [9, 15], "contribut": [9, 12], "build": [9, 10], "doc": [9, 10, 11], "sphinx": [9, 10, 11], "pytest": [9, 11], "analysi": [9, 10, 11], "mypi": [9, 10, 11], "lint": [9, 10, 11], "pre": [9, 10, 11, 14], "commit": [9, 10, 11], "updat": 9, "tool": [9, 10], "releas": [9, 12, 14, 15, 16], "practic": [9, 15], "step": [9, 11, 15], "dai": 9, "dev": [9, 11, 14, 16], "task": 9, "architectur": 9, "decis": 9, "record": 9, "why": [9, 15], "technic": [9, 13, 15], "materi": [9, 15], "defin": 10, "conform": 10, "format": 10, "style": 10, "import": 10, "order": [10, 13], "how": [10, 13], "guid": [10, 12, 13], "napoleon": 10, "extens": 10, "As": 10, "googl": 10, "consid": 10, "hint": 10, "signatur": 10, "For": 10, "exampl": 10, "def": 10, "func": 10, "arg1": 10, "str": 10, "arg2": 10, "int": 10, "bool": 10, "summari": 10, "line": 10, "extend": 10, "descript": 10, "arg": 10, "return": 10, "valu": 10, "true": 10, "extract": 10, "underlin": 10, "convent": 10, "headl": 10, "head": 10, "2": [10, 12], "3": [10, 11, 16], "These": 11, "instruct": 11, "take": 11, "minim": 11, "requir": [11, 13, 16], "so": [11, 16], "first": 11, "epic": [11, 12, 14, 16], "u22": [11, 14, 16], "either": 11, "host": 11, "machin": 11, "venv": [11, 16], "8": [11, 16], "later": [11, 16], "vscode": [11, 12], "virtualenv": 11, "cd": 11, "m": [11, 16], "bin": [11, 16], "activ": [11, 16], "devcontain": [11, 12], "reopen": 11, "prompt": 11, "termin": [11, 16], "graph": 11, "packag": 11, "tree": 11, "pipdeptre": 11, "now": [11, 16], "p": 11, "parallel": 11, "A": 12, "develop": 12, "ubuntu": 12, "22": 12, "04": 12, "lt": 12, "work": [12, 15], "ioc": 12, "support": 12, "soft": 12, "other": 12, "customiz": 12, "io": [12, 14], "section": 12, "user": 12, "back": 12, "grand": 13, "unifi": 13, "theori": 13, "david": 13, "la": 13, "There": 13, "secret": 13, "understood": 13, "write": 13, "good": 13, "softwar": [13, 16], "isn": 13, "thing": 13, "call": 13, "thei": 13, "tutori": 13, "refer": [13, 15], "explan": 13, "repres": 13, "differ": 13, "purpos": 13, "approach": 13, "creation": 13, "understand": 13, "implic": 13, "help": 13, "often": 13, "immens": 13, "topic": 13, "its": [14, 16], "depend": [14, 16], "alreadi": 14, "avail": 14, "registri": 14, "docker": 14, "ghcr": 14, "typic": 15, "usag": 15, "start": 15, "here": 15, "experienc": 15, "about": 15, "wai": 15, "recommend": 16, "interfer": 16, "path": 16, "featur": 16, "interfac": 16, "been": 16}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"architectur": [0, 1], "decis": [0, 1], "record": [0, 1], "1": 1, "statu": 1, "context": 1, "consequ": 1, "build": [2, 11], "doc": 2, "us": [2, 4, 6, 7], "sphinx": 2, "autobuild": 2, "contribut": 3, "project": 3, "issu": [3, 4], "discuss": 3, "code": [3, 10], "coverag": 3, "develop": [3, 9, 11], "guid": [3, 9, 15], "run": [4, 6, 7, 14], "lint": 4, "pre": 4, "commit": 4, "fix": 4, "vscode": 4, "support": 4, "make": 5, "releas": 5, "test": [6, 11], "pytest": 6, "static": 7, "analysi": 7, "mypi": 7, "updat": 8, "tool": 8, "tutori": [9, 15], "how": [9, 12, 15], "explan": [9, 15], "refer": 9, "standard": 10, "document": [10, 12, 13], "instal": [11, 16], "clone": 11, "repositori": 11, "depend": 11, "see": 11, "what": 11, "wa": 11, "dev": 12, "u22": 12, "i": 12, "structur": 12, "about": 13, "contain": 14, "start": 14, "user": 15, "check": 16, "your": 16, "version": 16, "python": 16, "creat": 16, "virtual": 16, "environ": 16, "librari": 16}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Architectural Decision Records": [[0, "architectural-decision-records"]], "1. Record architecture decisions": [[1, "record-architecture-decisions"]], "Status": [[1, "status"]], "Context": [[1, "context"]], "Decision": [[1, "decision"]], "Consequences": [[1, "consequences"]], "Build the docs using sphinx": [[2, "build-the-docs-using-sphinx"]], "Autobuild": [[2, "autobuild"]], "Contributing to the project": [[3, "contributing-to-the-project"]], "Issue or Discussion?": [[3, "issue-or-discussion"]], "Code coverage": [[3, "code-coverage"]], "Developer guide": [[3, "developer-guide"]], "Run linting using pre-commit": [[4, "run-linting-using-pre-commit"]], "Running pre-commit": [[4, "running-pre-commit"]], "Fixing issues": [[4, "fixing-issues"]], "VSCode support": [[4, "vscode-support"]], "Make a release": [[5, "make-a-release"]], "Run the tests using pytest": [[6, "run-the-tests-using-pytest"]], "Run static analysis using mypy": [[7, "run-static-analysis-using-mypy"]], "Update the tools": [[8, "update-the-tools"]], "Developer Guide": [[9, "developer-guide"]], "Tutorials": [[9, null], [15, null]], "How-to Guides": [[9, null], [15, null]], "Explanations": [[9, null], [15, null]], "Reference": [[9, null]], "Standards": [[10, "standards"]], "Code Standards": [[10, "code-standards"]], "Documentation Standards": [[10, "documentation-standards"]], "Developer install": [[11, "developer-install"]], "Clone the repository": [[11, "clone-the-repository"]], "Install dependencies": [[11, "install-dependencies"]], "See what was installed": [[11, "see-what-was-installed"]], "Build and test": [[11, "build-and-test"]], "dev-u22": [[12, "dev-u22"]], "How the documentation is structured": [[12, "how-the-documentation-is-structured"]], "About the documentation": [[13, "about-the-documentation"]], "Run in a container": [[14, "run-in-a-container"]], "Starting the container": [[14, "starting-the-container"]], "User Guide": [[15, "user-guide"]], "Installation": [[16, "installation"]], "Check your version of python": [[16, "check-your-version-of-python"]], "Create a virtual environment": [[16, "create-a-virtual-environment"]], "Installing the library": [[16, "installing-the-library"]]}, "indexentries": {}})