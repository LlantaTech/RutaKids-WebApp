from diagrams import Diagram, Cluster
from diagrams.onprem.client import Users
from diagrams.onprem.vcs import Github
from diagrams.onprem.ci import GithubActions
from diagrams.generic.compute import Rack
from diagrams.programming.flowchart import Decision
from diagrams.onprem.network import Nginx

with Diagram("7.2.2 – Stages Deployment Pipeline (Angular SSR + GitFlow)", show=False):
    dev = Users("Developer")
    github = Github("GitHub Repo")
    actions = GithubActions("GitHub Actions")

    dev >> github >> actions

    # Etapa: Desarrollo (develop)
    with Cluster("Stage: Development (develop)"):
        lint = Rack("Lint")
        unit = Rack("Unit Tests (Jest)")
        e2e = Rack("E2E Tests (Cypress)")
        build_dev = Rack("Build SSR (Dev)")
        serve_dev = Rack("Serve SSR (local)")
        actions >> [lint, unit, e2e, build_dev] >> serve_dev

    # Validación antes de producción
    approval = Decision("Merge to main?\n(Admin + All checks passed)")

    serve_dev >> approval

    # Etapa: Producción (main)
    with Cluster("Stage: Production (main)"):
        build_prod = Rack("Build SSR (Prod)")
        deploy = Nginx("Deploy to Server\nvia FTP/SSH")
        start_node = Rack("Start SSR Server\n(PM2 or Node)")

    approval >> build_prod >> deploy >> start_node
