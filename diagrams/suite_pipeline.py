from diagrams import Diagram, Cluster
from diagrams.onprem.client import Users
from diagrams.onprem.vcs import Github
from diagrams.onprem.ci import GithubActions
from diagrams.generic.compute import Rack
from diagrams.programming.flowchart import PredefinedProcess, Decision
from diagrams.saas.chat import Slack
from diagrams.onprem.network import Nginx

with Diagram("7.1.2 – Build & Test Suite Pipeline (Angular SSR + GitFlow)", show=False):
    dev = Users("Developer (WebStorm)")
    github = Github("GitHub Repository")
    actions = GithubActions("GitHub Actions")

    dev >> github >> actions

    # GitFlow branch handling
    branch = PredefinedProcess("Branch Flow (GitFlow)\nfeature/* → develop → release/* → main")

    actions >> branch

    with Cluster("Build & Test (develop, release/*)"):
        lint = Rack("Lint (ng lint)")
        unit = Rack("Unit Tests (Jest)")
        e2e = Rack("E2E (Cypress + Cucumber)\n⚠ Requires SSR running")
        build = Rack("Build SSR\n(npm run build:ssr)")

    branch >> [lint, unit, e2e, build]

    with Cluster("Coverage & Reporting"):
        coverage = Rack("Coverage (--code-coverage)")
        report = Rack("Codecov / SonarQube")

    unit >> coverage >> report

    feedback = Slack("Slack / Email Notification")
    badge = Rack("PR Badge")

    report >> [feedback, badge]

    status_check = Decision("Status Check\nBlock merge if fail")
    badge >> status_check
    status_check >> github

    # Deploy only when code reaches main
    with Cluster("Production Deploy (main only)"):
        prod_build = Rack("Final Build SSR\n(on push to main)")
        deploy = Nginx("Deploy to Server\nvia FTP/SSH")

    status_check >> prod_build >> deploy
