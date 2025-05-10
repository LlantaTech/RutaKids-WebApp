from diagrams import Diagram, Cluster
from diagrams.onprem.client import Users
from diagrams.onprem.vcs import Github
from diagrams.onprem.ci import GithubActions
from diagrams.generic.compute import Rack
from diagrams.onprem.network import Nginx
from diagrams.programming.flowchart import Decision

with Diagram("7.2.3 – CI/CD Pipeline Diagram (Angular SSR + GitFlow)", show=False):
    dev = Users("Developer")
    github = Github("GitHub Repo")
    actions = GithubActions("GitHub Actions")

    dev >> github >> actions

    # GitFlow branch strategy
    with Cluster("Git Branch Flow"):
        feature = Rack("feature/*")
        develop = Rack("develop")
        main = Rack("main (only admins)")
        feature >> develop >> main

    actions >> feature

    with Cluster("CI Process (on develop/release)"):
        lint = Rack("Lint")
        test = Rack("Unit Tests")
        e2e = Rack("E2E Tests")
        build_ssr = Rack("Build SSR\n→ dist/browser + dist/server")
        coverage = Rack("Code Coverage")
        status = Rack("PR Status + Badge")

        develop >> [lint, test, e2e, build_ssr, coverage, status]

    # Condition to deploy
    merge_ok = Decision("Merge to main?\n(Admin + all checks pass)")
    status >> merge_ok

    with Cluster("CD Process (on main)"):
        prod_build = Rack("Rebuild SSR")
        ftp = Nginx("Deploy via FTP/SSH")
        start = Rack("Start SSR Server\n(node dist/server/main.js)")

        merge_ok >> prod_build >> ftp >> start
